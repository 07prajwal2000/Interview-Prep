import { InventoryItem } from "./InventoryItem";


export class CartItem {
  constructor(
    public readonly name: string,
    public readonly quantity: number,
    private readonly item: InventoryItem
  ) { }

  public getTotalPrice() {
    return this.quantity * this.item.getPrice().getValue();
  }
}
