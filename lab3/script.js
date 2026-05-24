(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    console.log("Main task:");

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === "j") {
            speakGoodBye(names[i]);
        } else {
            speakHello(names[i]);
        }
    }

    console.log("Additional task: names that end with letter 'a'");

    for (var j = 0; j < names.length; j++) {
        var lastLetter = names[j].charAt(names[j].length - 1).toLowerCase();

        if (lastLetter === "a") {
            console.log("Name ends with 'a': " + names[j]);
        } else {
            console.log("Name does not end with 'a': " + names[j]);
        }
    }
})();
