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