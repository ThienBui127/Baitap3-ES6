class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static calculateTriple(input = 1) {
        return input * 3;
    }
}

class Shape extends Item {
    constructor(name, description, width){
        super(name, description);
        this.width = width;
    }
}

const shape = new Shape("rectangle", "rec desc", 20);
console.log(Item.calculateTriple(shape.width)); 
