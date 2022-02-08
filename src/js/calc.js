// @prepros-append modules/ratio.js
// @prepros-append modules/square.js
// @prepros-append modules/sum.js
// @prepros-append modules/typeConstruction.js
// @prepros-append modules/sumWater.js
// @prepros-append modules/total.js

window.addEventListener("load", function () {
    let calc = new Calc();
});

class Calc {
    constructor(options) {

        let def = {
            calcSelector: '[data-calc="calc"]',
            fieldSelector: '[data-calc="field"]',
            electricSelector: '[data-sum="electric"]',
            waterSelector: '[data-sum="water"]',
            heatingSelector: '[data-sum="heating"]',
            buildingSelector: '[data-sum="building"]',
            deliverySelector: '[data-sum="delivery"]',
        }
        Object.assign(this, def, options);

        this.fieldsElem = document.querySelectorAll(this.fieldSelector);
        this.floorElem = document.querySelector('[name="floors"]');

        this.square = new Square();
        this.ratio = new Ratio();
        this.typeConstruction = new TypeConstruction(this);
        this.electric = new Sum(this.electricSelector,this);
        this.water = new SumWater(this.waterSelector,this);
        this.heating = new Sum(this.heatingSelector,this);
        this.building = new Sum(this.buildingSelector,this);
        this.delivery = new Sum(this.deliverySelector,this);
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