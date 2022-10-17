type Size = "" | "S" | "M" | "XL";

class Product {
	constructor(public name: string = "", public price: number = 0, public size: Size = "") {}

	isValidProduct(): boolean {
		for (const key in this) {
			switch (typeof this[key]) {
				case "string":
					if ((<string>this[key]).length <= 0) {
						throw Error(`${key} is empty`);
					}
					break;
				case "number":
					if (<number>this[key] <= 0) {
						throw Error(`${key} is lower than 0`);
					}
					break;
				default:
					throw Error(`${typeof this[key]} is not valid`);
			}
		}
		return true;
	}

	toString(): string | undefined {
		if (!this.isValidProduct()) return;
		let message = "";
		for (const key in this) {
			message += `${key}: ${this[key]} `;
		}
		return message;
	}
}

(() => {
	try {
		const product = new Product("Blue jeans", 20, "XL");
		console.log(product.toString());
	} catch (error) {
		console.error(error);
	}
})();
