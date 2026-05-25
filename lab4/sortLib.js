var SortLib = {};

SortLib.bubbleSort = function(arr, ascending = true) {
    let a = [...arr]; 
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] === undefined || a[j+1] === undefined) {
                console.log("Found undefined element");
                continue;
            }

            comparisons++;

            let condition = ascending
                ? a[j] > a[j + 1]
                : a[j] < a[j + 1];

            if (condition) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swaps++;
            }
        }
    }

    console.log("Bubble Sort:");
    console.log("Result:", a);
    console.log("Comparisons:", comparisons);
    console.log("Swaps:", swaps);

    return a;
};

SortLib.selectionSort = function(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < a.length; i++) {
        let index = i;

        for (let j = i + 1; j < a.length; j++) {

            if (a[j] === undefined || a[index] === undefined) {
                console.log("Found undefined element");
                continue;
            }

            comparisons++;

            let condition = ascending
                ? a[j] < a[index]
                : a[j] > a[index];

            if (condition) {
                index = j;
            }
        }

        if (index !== i) {
            [a[i], a[index]] = [a[index], a[i]];
            swaps++;
        }
    }

    console.log("Selection Sort:");
    console.log("Result:", a);
    console.log("Comparisons:", comparisons);
    console.log("Swaps:", swaps);

    return a;
};
