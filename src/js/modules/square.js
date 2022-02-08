class Square {
    constructor(options) {
        let def = {
            squareSelector: '[data-square="total"]',
            itemSelector: '[data-square="item"]',
        }
        Object.assign(this, def, options);

        this.squareElem = document.querySelector(this.squareSelector);
        this.itemsElem = document.querySelectorAll(this.itemSelector);

    }

    get value() {
        return Array.from(this.itemsElem).reduce((sum, i) => {
            return sum * Number(i.value)
        }, 1)
    }

    update() {
        this.squareElem.value = this.value;
    }
}