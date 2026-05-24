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

// 1.2.5 метод drive
car1.drive = function () {
    console.log("I am not driving at night");
};


// 1.2.4 car2 через літерал
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

// 1.2.6 метод drive
car2.drive = function () {
    console.log("I can drive anytime");
};


// перевірка
console.log("car1:");
console.log(car1);
car1.drive();

console.log("car2:");
console.log(car2);
car2.drive();
