import { Currency } from "./Currency";

export class InventoryItem {
  constructor(
    private readonly name: string,
    private price: Currency,
    private quantity: number
  ) { }

  public static Create(name: string, price: Currency, quantity: number) {
    return new InventoryItem(name, price, quantity);
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(price: Currency) {
    this.price = price;
    return this.price;
  }

  public getQuantity() {
    return this.quantity;
  }

  public addQuantity(value: number) {
    this.quantity += value;
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    return this.quantity;
  }

  public setQuantity(value: number) {
    if (value < 0) {
      this.quantity = 0;
      return 0;
    }
    this.quantity = value;
    return this.quantity;
  }
}
