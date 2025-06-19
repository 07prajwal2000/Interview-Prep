import { Inventory } from "./Inventory";
import { InventoryItem } from "./InventoryItem";
import { Transaction } from "./Transaction";
import { VendingMachineState } from "./VendingMachineState";

export class VendingMachine {
  private readonly inventory: Inventory;
  private vmState = VendingMachineState.IdleState;
  
  constructor() {
    this.inventory = new Inventory();
  }

  public getState() {
    return this.vmState;
  }

  public setState(state: VendingMachineState) {
    this.vmState = state;
  }

  public createTransaction() {
    return new Transaction(this, this.inventory);
  }

  public addInventoryItem(item: InventoryItem) {
    this.inventory.addItem(item);
  }

}