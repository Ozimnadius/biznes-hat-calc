class Heating {
    constructor(calc, options) {
        let def = {
            selectSelector: '[data-heating="select"]',
            priceSelector: '[data-heating="price"]',
            totalSelector: '[data-heating="total"]',
        }

        Object.assign(this, def, options);

        this.calc = calc;
        this.selectElem = document.querySelector(this.selectSelector);
        this.priceElem = document.querySelector(this.priceSelector);
        this.totalElem = document.querySelector(this.totalSelector);

        this.total = 0;
    }

    update() {
        this.priceElem.value = this.selectElem.value;
        this.total = Math.round(this.priceElem.value * this.calc.square.square);
        this.totalElem.value = this.total;
    }
}