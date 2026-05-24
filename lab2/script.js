let car1 = new Object();

car1.color = "blue";
car1.maxSpeed = 180;
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver = {
    name: "Тукшинкін Захар",
    category: "C",
    "personal limitations": "No driving at night"
};

car1.drive = function () {
    console.log("I am not driving at night");
};


let car2 = {
    color: "red",
    maxSpeed: 200,
    tuning: false,
    "number of accidents": 2,

    driver: {
        name: "Тукшинкін Захар",
        category: "B",
        "personal limitations": null
    }
};

car2.drive = function () {
    console.log("I can drive anytime");
};


console.log("car1:");
console.log(car1);
car1.drive();

console.log("car2:");
console.log(car2);
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function () {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        let message = "Driver " + this.driver.name;

        if (!this.driver.nightDriving) {
            message += " does not drive at night";
        } else {
            message += " drives at night";
        }

        message += " and has " + this.driver.experience + " years of experience";

        console.log(message);
    }
};

let truck1 = new Truck("white", 5000, 90, "Volvo", "FH16");

truck1.trip();

truck1.AssignDriver("Олексій", false, 5);

truck1.trip();

// 1.2.12 Square
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square: a - сторона квадрата");
    }

    length() {
        return this.a * 4;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log("Square:");
        console.log("Side:", this.a);
        console.log("Perimeter:", this.length());
        console.log("Area:", this.square());
    }
}

let sq = new Square(5);
sq.info();


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Rectangle:");
        console.log("Sides:", this.a, this.b);
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.square());
    }
}

let rect = new Rectangle(4, 6);
rect.info();

class Rhombus extends Square {
    constructor(a, alpha) {
        super(a);
        this.alpha = alpha; 
    }

    square() {
        return this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
    }

    info() {
        console.log("Rhombus:");
        console.log("Side:", this.a);
        console.log("Angle:", this.alpha);
        console.log("Area:", this.square());
    }
}

let rhomb = new Rhombus(5, 30);
rhomb.info();


class Parallelogram extends Rectangle {
    constructor(a, b, alpha) {
        super(a, b);
        this.alpha = alpha;
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
    }

    info() {
        console.log("Parallelogram:");
        console.log("Sides:", this.a, this.b);
        console.log("Angle:", this.alpha);
        console.log("Area:", this.square());
    }
}

let para = new Parallelogram(4, 6, 30);
para.info();
