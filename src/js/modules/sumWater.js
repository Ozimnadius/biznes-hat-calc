class SumWater extends Sum{
    constructor(selector,calc) {
        super(selector,calc);
        this.valueElem = this.sum.querySelector('[data-sum="value"]');
    }

    update() {
        this.total = Math.round(this.valueElem.value*13000);
        this.totalElem.value = this.total;
        this.priceElem.value = Math.round(this.totalElem.value/this.calc.square.value);
    }
}