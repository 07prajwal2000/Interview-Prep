import { InventoryItem } from "./InventoryItem";

export class Inventory {
	private readonly items = new Map<string, InventoryItem>();

  public addItem(item: InventoryItem) {
    const name = item.getName();
    if (!this.items.has(name)) this.items.set(name, item);
    else this.items.set(name, item);
  }

  public getItem(name: string) {
    return this.items.get(name);
  }

  public disburseItem(name: string, quantity: number) {
    if (!this.items.has(name)) return false;
    const item = this.items.get(name)!;
    const updatedQuantity = item.addQuantity(-quantity);
    if (updatedQuantity <= 0) this.items.delete(name);
    return true;
  }
}
