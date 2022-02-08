class Delivery extends Sum{
    constructor(calc, options) {
        super(calc, options);
        let def = {
            selectSelector: '[data-delivery="select"]',
            priceSelector: '[data-delivery="price"]',
            totalSelector: '[data-delivery="total"]',
        }
        Object.assign(this, def, options);
    }
}