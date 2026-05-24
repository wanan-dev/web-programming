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
