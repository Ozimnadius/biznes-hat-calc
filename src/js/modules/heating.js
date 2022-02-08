class Heating extends Sum{
    constructor(calc, options) {
        super(calc, options);
        let def = {
            selectSelector: '[data-heating="select"]',
            priceSelector: '[data-heating="price"]',
            totalSelector: '[data-heating="total"]',
        }
        Object.assign(this, def, options);
    }

}