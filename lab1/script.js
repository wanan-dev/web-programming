console.log("Використання: triangle(value1, type1, value2, type2)");

function triangle(v1, t1, v2, t2) {
    let a, b, c, alpha, beta;

    if (v1 <= 0 || v2 <= 0) {
        console.log("Некоректні значення");
        return "Zero or negative input";
    }

    const toRad = (deg) => deg * Math.PI / 180;
    const toDeg = (rad) => rad * 180 / Math.PI;

    if (
        (t1 === "leg" && t2 === "hypotenuse") ||
        (t2 === "leg" && t1 === "hypotenuse")
    ) {
        if (t1 === "leg") {
            a = v1;
            c = v2;
        } else {
            a = v2;
            c = v1;
        }

        if (a >= c) {
            console.log("Помилка");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = toDeg(Math.asin(a / c));
        beta = 90 - alpha;
    } else {
        console.log("Неправильні типи");
        return "failed";
    }

    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("alpha =", alpha);
    console.log("beta =", beta);

    return "success";
}
