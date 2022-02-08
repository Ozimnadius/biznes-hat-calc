//USER


// common.js

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),
}


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
        this.electric = new Electric(this);
        this.water = new Water(this);
        this.heating = new Heating(this);
        this.building = new Building(this);
        this.delivery = new Delivery(this);
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
class TypeConstruction {
    constructor(calc,options) {
        let def = {
            nameSelector: '[data-type="name"]',
            priceSelector: '[data-type="price"]',
            totalSelector: '[data-type="total"]',
            dataSquares: {
                0: {
                    floor: {
                        1: {
                            name: "Здание 1 этажное до 150 м²",
                            price: 53000
                        },
                        2: {
                            name: "Здание 2 этажное до 150 м²",
                            price: 43000
                        },
                        3: {
                            name: "Здание 3-х этажное более 1000 м²",
                            price: 34000
                        }
                    }
                },
                150: {
                    floor: {
                        1: {
                            name: "Здание 1 этажное от 151 до 300 м²",
                            price: 48500
                        },
                        2: {
                            name: "Здание 2-х этажное от 151 до 300 м²",
                            price: 40000
                        },
                        3: {
                            name: "Здание 3-х этажное более 1000 м²",
                            price: 34000
                        }
                    }
                },
                300: {
                    floor: {
                        1: {
                            name: "Здание 1 этажное от 300 до 600 м²",
                            price: 46000
                        },
                        2: {
                            name: "Здание 2-х этажное от 300 до 600 м²",
                            price: 37000
                        },
                        3: {
                            name: "Здание 3-х этажное более 1000 м²",
                            price: 34000
                        }
                    }
                },
                600: {
                    floor: {
                        1: {
                            name: "Здание 1 этажное от 600 до 1000 м²",
                            price: 44000
                        },
                        2: {
                            name: "Здание 2-х этажное от 600 до 1000 м²",
                            price: 36000
                        },
                        3: {
                            name: "Здание 3-х этажное более 1000 м²",
                            price: 34000
                        }
                    }
                },
                1000: {
                    floor: {
                        1: {
                            name: "Здание 1 этажное более 1000 м²",
                            price: 43000
                        },
                        2: {
                            name: "Здание 2-х этажное более 1000 м²",
                            price: 34000
                        },
                        3: {
                            name: "Здание 3-х этажное более 1000 м²",
                            price: 34000
                        }
                    }
                }
            }
        }
        Object.assign(this, def, options);

        this.calc = calc;
        this.nameElem = document.querySelector(this.nameSelector);
        this.priceElem = document.querySelector(this.priceSelector);
        this.totalElem = document.querySelector(this.totalSelector);

        this.total = 0;
    }

    get data() {
        let result = Object.keys(this.dataSquares).reverse().find((i) => this.calc.square.value > Number(i));
        return this.dataSquares[result].floor[this.calc.floor];
    }

    update() {
        this.nameElem.value = this.data.name;
        this.priceElem.value = Math.round(this.data.price * this.calc.ratio.value);
        this.total = Math.round(this.priceElem.value * this.calc.square.value);
        this.totalElem.value = this.total;
    }


}
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
class Water {
    constructor(calc, options) {
        let def = {
            valueSelector: '[data-water="value"]',
            priceSelector: '[data-water="price"]',
            totalSelector: '[data-water="total"]',
        }

        Object.assign(this, def, options);

        this.calc = calc;
        this.valueElem = document.querySelector(this.valueSelector);
        this.priceElem = document.querySelector(this.priceSelector);
        this.totalElem = document.querySelector(this.totalSelector);

        this.total = 0;
    }

    update() {
        this.total = Math.round(this.valueElem.value*13000);
        this.totalElem.value = this.total;
        this.priceElem.value = Math.round(this.totalElem.value/this.calc.square.value);
    }
}
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
        this.priceElem.value = Math.round(this.totalElem.value/this.calc.square.value);

    }
}
//# sourceMappingURL=script.js.map