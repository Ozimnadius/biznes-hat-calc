class Electric extends Sum {
    constructor(calc, options) {
        super(calc, options);
        let def = {
            selectSelector: '[data-electric="select"]',
            priceSelector: '[data-electric="price"]',
            totalSelector: '[data-electric="total"]',
        }

        Object.assign(this, def, options);
    }
}