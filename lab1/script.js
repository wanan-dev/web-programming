console.log("Використання: triangle(value1, type1, value2, type2)");

function triangle(v1, t1, v2, t2) {
    let a, b, c, alpha, beta;

    if (v1 <= 0 || v2 <= 0) {
        console.log("failed");
        return "failed";
    }

    t1 = t1.toLowerCase();
    t2 = t2.toLowerCase();

    function toRad(deg) {
        return deg * Math.PI / 180;
    }

    function toDeg(rad) {
        return rad * 180 / Math.PI;
    }

    function isAngle(type) {
        return type === "angle" || type === "acute angle";
    }

    function printResult() {
        console.log("a =", a);
        console.log("b =", b);
        console.log("c =", c);
        console.log("alpha =", alpha);
        console.log("beta =", beta);
        console.log("success");
        return "success";
    }

    if (t1 === "leg" && t2 === "leg") {
        a = v1;
        b = v2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDeg(Math.asin(a / c));
        beta = 90 - alpha;
        return printResult();
    }

    if (
        (t1 === "leg" && t2 === "hypotenuse") ||
        (t1 === "hypotenuse" && t2 === "leg")
    ) {
        if (t1 === "leg") {
            a = v1;
            c = v2;
        } else {
            a = v2;
            c = v1;
        }

        if (a >= c) {
            console.log("failed");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = toDeg(Math.asin(a / c));
        beta = 90 - alpha;
        return printResult();
    }

    if (
        (t1 === "hypotenuse" && isAngle(t2)) ||
        (t2 === "hypotenuse" && isAngle(t1))
    ) {
        if (t1 === "hypotenuse") {
            c = v1;
            alpha = v2;
        } else {
            c = v2;
            alpha = v1;
        }

        if (alpha <= 0 || alpha >= 90) {
            console.log("failed");
            return "failed";
        }

        beta = 90 - alpha;
        a = c * Math.sin(toRad(alpha));
        b = c * Math.cos(toRad(alpha));
        return printResult();
    }

    if (
        (t1 === "leg" && t2 === "opposite angle") ||
        (t2 === "leg" && t1 === "opposite angle")
    ) {
        if (t1 === "leg") {
            a = v1;
            alpha = v2;
        } else {
            a = v2;
            alpha = v1;
        }

        if (alpha <= 0 || alpha >= 90) {
            console.log("failed");
            return "failed";
        }

        beta = 90 - alpha;
        c = a / Math.sin(toRad(alpha));
        b = Math.sqrt(c * c - a * a);
        return printResult();
    }
    
    if (
        (t1 === "leg" && t2 === "adjacent angle") ||
        (t2 === "leg" && t1 === "adjacent angle")
    ) {
        if (t1 === "leg") {
            a = v1;
            beta = v2;
        } else {
            a = v2;
            beta = v1;
        }

        if (beta <= 0 || beta >= 90) {
            console.log("failed");
            return "failed";
        }

        alpha = 90 - beta;
        c = a / Math.cos(toRad(beta));
        b = Math.sqrt(c * c - a * a);
        return printResult();
    }

    console.log("failed");
    return "failed";
}
