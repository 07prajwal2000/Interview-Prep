export class Currency {
  constructor(private readonly value: number) { }

  public getValue() {
    return this.value;
  }

  public static FromValue(value: number) {
    return new Currency(value);
  }
}

export class Coin extends Currency { }
export class Note extends Currency { }