// @prepros-append modules/ratio.js
// @prepros-append modules/square.js
// @prepros-append modules/sum.js
// @prepros-append modules/typeConstruction.js
// @prepros-append modules/water.js
// @prepros-append modules/total.js

window.addEventListener("load", function () {
    let calc = new Calc();
});

class Calc {
    constructor(options) {

        let def = {
            calcSelector: '[data-calc="calc"]',
            fieldSelector: '[data-calc="field"]',
        }
        Object.assign(this, def, options);

        this.fieldsElem = document.querySelectorAll(this.fieldSelector);
        this.floorElem = document.querySelector('[name="floors"]');

        this.square = new Square();
        this.ratio = new Ratio();
        this.typeConstruction = new TypeConstruction(this);
        this.electric = new Sum('[data-sum="electric"]',this);
        this.water = new Water('[data-sum="water"]',this);
        this.heating = new Sum('[data-sum="heating"]',this);
        this.building = new Sum('[data-sum="building"]',this);
        this.delivery = new Sum('[data-sum="delivery"]',this);
        this.total = new Total(this);

        this.#init();
    }

    #init() {
        this.update();
        this.fieldsElem.forEach(i => i.addEventListener('change', this.update));
    }

    get floor() {
        return this.floorElem.value;
    }

    update = () => {
        this.square.update();
        this.typeConstruction.update();
        this.electric.update();
        this.water.update();
        this.heating.update();
        this.building.update();
        this.delivery.update();
        this.total.update();
    }
}