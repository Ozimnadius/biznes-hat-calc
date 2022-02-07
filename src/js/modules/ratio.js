class Ratio {
    constructor(options) {
        let def = {
            ceilingHeightSelector: '[data-ceilingHeight]',
            matrix: {
                '2.5': 1.04,
                '3': 1.08,
                '3.5': 1.12,
            }
        }
        Object.assign(this, def, options);

        this.ceilingHeight = document.querySelector(this.ceilingHeightSelector).value;
    }

    get value() {
        return this.matrix[this.ceilingHeight];
    }
}