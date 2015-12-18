"use strict";

export class CoffeeMaker {

	constructor(grinder) {
		this.grinder = grinder;
	}

	brew() {
		this.grinder.grind();
	}
}
