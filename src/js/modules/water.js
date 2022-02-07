class Water {
    constructor(calc, options) {
        let def = {
            valueSelector: '[data-water="value"]',
            priceSelector: '[data-water="price"]',
            totalSelector: '[data-water="total"]',
        }

        Object.assign(this, def, options);

        this.calc = calc;
        this.valueElem = document.querySelector(this.valueSelector);
        this.priceElem = document.querySelector(this.priceSelector);
        this.totalElem = document.querySelector(this.totalSelector);

        this.total = 0;
    }

    update() {
        this.total = Math.round(this.valueElem.value*13000);
        this.totalElem.value = this.total;
        this.priceElem.value = Math.round(this.totalElem.value/this.calc.square.square);
    }
}