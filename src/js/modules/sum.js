class Sum {
    constructor(calc, options) {
        let def = {
            selectSelector: '[data-sum="select"]',
            priceSelector: '[data-sum="price"]',
            totalSelector: '[data-sum="total"]',
        }

        Object.assign(this, def, options);

        this.calc = calc;
        this.total = 0;
    }

    get selectElem(){
       return  document.querySelector(this.selectSelector);
    }

    get priceElem(){
        return document.querySelector(this.priceSelector);
    }

     get totalElem(){
        return document.querySelector(this.totalSelector);
     }

    update() {
        this.priceElem.value = this.selectElem.value;
        this.total = Math.round(this.priceElem.value * this.calc.square.value);
        this.totalElem.value = this.total;
    }
}