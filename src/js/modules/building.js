class Building extends Sum{
    constructor(calc, options) {
        super(calc, options);
        let def = {
            selectSelector: '[data-building="select"]',
            priceSelector: '[data-building="price"]',
            totalSelector: '[data-building="total"]',
        }

        Object.assign(this, def, options);
    }
}