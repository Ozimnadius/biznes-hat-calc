class Sum {
    constructor(selector,calc) {
        this.sum = document.querySelector(selector);
        this.selectElem = this.sum.querySelector('[data-sum="select"]');
        this.priceElem = this.sum.querySelector('[data-sum="price"]');
        this.totalElem = this.sum.querySelector('[data-sum="total"]');

        this.calc = calc;
        this.total = 0;
    }

    update() {
        this.priceElem.value = this.selectElem.value;
        this.total = Math.round(this.priceElem.value * this.calc.square.value);
        this.totalElem.value = this.total;
    }
}