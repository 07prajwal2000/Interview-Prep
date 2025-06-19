export class Product {
	constructor(private readonly name: string, private readonly price: number) {}

	public getPrice() {
		return this.price;
	}
	public getName() {
		return this.name;
	}
}
