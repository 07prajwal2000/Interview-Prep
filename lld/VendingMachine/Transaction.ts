import { CartItem } from "./CartItem";
import { Coin, Currency, Note } from "./Currency";
import { Inventory } from "./Inventory";
import { VendingMachine } from "./VendingMachine";
import { VendingMachineState } from "./VendingMachineState";

export class Transaction {
	private readonly cartItems: CartItem[] = [];
	private readonly insertedCurrency: Currency[] = [];
	private started = false;
  private completed = false;
	private totalTransactionPrice = -1;

	constructor(
		private readonly vm: VendingMachine,
		private readonly inventory: Inventory
	) {}

	public start() {
		if (this.started) {
			console.log("Transaction already started.");
			return;
		}
		if (this.vm.getState() != VendingMachineState.IdleState) {
			console.log("Vending Machine is not in Idle State.");
			return;
		}
		this.started = true;
		this.vm.setState(VendingMachineState.ReadyState);
	}

	public addToCart(name: string, quantity: number) {
		if (!this.started) {
			console.log("Transaction is not started.");
			return;
		}
		const item = this.inventory.getItem(name);
		if (!item) {
			console.log("Item is not in inventory. Please select a different item.");
			return;
		}
    if (item.getQuantity() < quantity) {
      console.log("Inventory does not have enough stock.");
      return;
    }
		this.cartItems.push(new CartItem(name, quantity, item));
	}

	public insertCoin(coin: Coin) {
		if (!this.started) {
			console.log("Transaction is not started.");
			return;
		}
		this.insertedCurrency.push(coin);
	}

	public insertNote(note: Note) {
		if (!this.started) {
			console.log("Transaction is not started.");
			return;
		}
		this.insertedCurrency.push(note);
	}

	public dispense() {
		if (!this.started) return;
		if (this.vm.getState() == VendingMachineState.DispenseState) return;

		this.vm.setState(VendingMachineState.DispenseState);
		console.log("Dispensing Items...");

		for (let item of this.cartItems) {
			this.totalTransactionPrice += item.getTotalPrice();
			console.log(`${item.name} - ${item.quantity} - $${item.getTotalPrice()}`);
		}

		console.log(`Total Price: $${this.totalTransactionPrice}`);
	}

	public getChange() {
		if (
			this.vm.getState() == VendingMachineState.ReturnChangeState ||
			this.totalTransactionPrice == -1
		)
			return -1;

		let totalInsertedCurrency = 0;

		for (let currency of this.insertedCurrency)
			totalInsertedCurrency += currency.getValue();

		if (this.totalTransactionPrice > totalInsertedCurrency) {
			console.log("Total money you've inserted isn't enough.");
			return -1;
		}

    console.log("Please collect your change...");

    this.vm.setState(VendingMachineState.ReturnChangeState);
		const change = totalInsertedCurrency - this.totalTransactionPrice;
		return change;
	}

  public complete() {
    if (this.vm.getState() != VendingMachineState.ReturnChangeState) return;
    this.completed = true;
    this.vm.setState(VendingMachineState.IdleState);
    console.log("Transaction completed. Thank you...");
  }
}


