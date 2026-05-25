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
