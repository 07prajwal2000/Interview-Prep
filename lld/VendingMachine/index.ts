import { Coin, Currency, Note } from "./Currency";
import { InventoryItem } from "./InventoryItem";
import { VendingMachine } from "./VendingMachine";

const vm = new VendingMachine();
const cola = InventoryItem.Create("Cola", Currency.FromValue(10), 12);
const chips = InventoryItem.Create("Chips", Currency.FromValue(5), 12);
const candy = InventoryItem.Create("Candy", Currency.FromValue(2), 25);
const coffee = InventoryItem.Create("Coffee", Currency.FromValue(8), 10);

vm.addInventoryItem(cola);
vm.addInventoryItem(chips);
vm.addInventoryItem(candy);
vm.addInventoryItem(coffee);

const transaction = vm.createTransaction();
transaction.start();
transaction.addToCart(cola.getName(), 1);
transaction.addToCart(chips.getName(), 2);
transaction.insertCoin(Coin.FromValue(5));
transaction.insertCoin(Coin.FromValue(2));
transaction.insertCoin(Note.FromValue(20));
transaction.dispense();
const change = transaction.getChange();
console.log(`Got change: $${change}`);
transaction.complete();