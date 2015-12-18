"use strict";

class CoffeeMaker {
	
	grinder;
	
	constructor(grinder) {
		this.grinder =grinder;	
	}
	
	brew() {
		grinder.grind();
	}
}
