console.log('Use: triangle(value1, type1, value2, type2)');
console.log('Types: "leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"');

function triangle(value1, type1, value2, type2) {
    let a, b, c, alpha, beta;

    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    function toDegrees(radians) {
        return radians * 180 / Math.PI;
    }

    function printResult() {
        console.log("a =", a);
        console.log("b =", b);
        console.log("c =", c);
        console.log("alpha =", alpha);
        console.log("beta =", beta);
        return "success";
    }

    function instructionError() {
        console.log("Please read the instruction again");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        return "Zero or negative input";
    }

    if (typeof type1 !== "string" || typeof type2 !== "string") {
        return instructionError();
    }

    type1 = type1.toLowerCase();
    type2 = type2.toLowerCase();

    // leg + hypotenuse
    if (
        (type1 === "leg" && type2 === "hypotenuse") ||
        (type1 === "hypotenuse" && type2 === "leg")
    ) {
        if (type1 === "leg") {
            a = value1;
            c = value2;
        } else {
            a = value2;
            c = value1;
        }

        if (a >= c) {
            return "Hypotenuse must be greater than leg";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;

        return printResult();
    }

    // leg + leg
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;

        return printResult();
    }

    // hypotenuse + angle
    if (
        (type1 === "hypotenuse" && type2 === "angle") ||
        (type1 === "angle" && type2 === "hypotenuse")
    ) {
        if (type1 === "hypotenuse") {
            c = value1;
            alpha = value2;
        } else {
            c = value2;
            alpha = value1;
        }

        if (alpha <= 0 || alpha >= 90) {
            return "Not acute angle";
        }

        beta = 90 - alpha;
        a = c * Math.sin(toRadians(alpha));
        b = c * Math.cos(toRadians(alpha));

        return printResult();
    }

    // leg + opposite angle
    if (
        (type1 === "leg" && type2 === "opposite angle") ||
        (type1 === "opposite angle" && type2 === "leg")
    ) {
        if (type1 === "leg") {
            a = value1;
            alpha = value2;
        } else {
            a = value2;
            alpha = value1;
        }

        if (alpha <= 0 || alpha >= 90) {
            return "Not acute angle";
        }

        beta = 90 - alpha;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);

        return printResult();
    }

    // leg + adjacent angle
    if (
        (type1 === "leg" && type2 === "adjacent angle") ||
        (type1 === "adjacent angle" && type2 === "leg")
    ) {
        if (type1 === "leg") {
            a = value1;
            beta = value2;
        } else {
            a = value2;
            beta = value1;
        }

        if (beta <= 0 || beta >= 90) {
            return "Not acute angle";
        }

        alpha = 90 - beta;
        c = a / Math.cos(toRadians(beta));
        b = Math.sqrt(c * c - a * a);

        return printResult();
    }

    return instructionError();
}
