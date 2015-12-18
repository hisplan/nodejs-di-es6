"use strict";

class CoffeeMaker {
	
	var grinder;
	
	constructor(grinder) {
		this.grinder =grinder;	
	}
	
	brew() {
		grinder.grind();
	}
}
