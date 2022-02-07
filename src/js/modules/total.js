class Total {
    constructor(calc, options) {
        let def = {
            priceSelector: '[data-total="price"]',
            totalSelector: '[data-total="total"]',
        }

        Object.assign(this, def, options);

        this.calc = calc;
        this.priceElem = document.querySelector(this.priceSelector);
        this.totalElem = document.querySelector(this.totalSelector);

    }

    update() {
        this.totalElem.value = this.calc.typeConstruction.total+
            this.calc.electric.total+
            this.calc.water.total+
            this.calc.heating.total+
            this.calc.building.total+
            this.calc.delivery.total;
        this.priceElem.value = Math.round(this.totalElem.value/this.calc.square.square);

    }
}