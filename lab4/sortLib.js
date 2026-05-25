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

SortLib.insertionSort = function(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;

        while (j >= 0) {

            if (a[j] === undefined || key === undefined) {
                console.log("Found undefined element");
                break;
            }

            comparisons++;

            let condition = ascending
                ? a[j] > key
                : a[j] < key;

            if (condition) {
                a[j + 1] = a[j];
                swaps++;
                j--;
            } else {
                break;
            }
        }

        a[j + 1] = key;
    }

    console.log("Insertion Sort:");
    console.log("Result:", a);
    console.log("Comparisons:", comparisons);
    console.log("Swaps:", swaps);

    return a;
};

SortLib.shellSort = function(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let swaps = 0;

    let gap = Math.floor(a.length / 2);

    while (gap > 0) {

        for (let i = gap; i < a.length; i++) {
            let temp = a[i];
            let j = i;

            while (j >= gap) {

                if (a[j - gap] === undefined || temp === undefined) {
                    console.log("Found undefined element");
                    break;
                }

                comparisons++;

                let condition = ascending
                    ? a[j - gap] > temp
                    : a[j - gap] < temp;

                if (condition) {
                    a[j] = a[j - gap];
                    swaps++;
                    j -= gap;
                } else {
                    break;
                }
            }

            a[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    console.log("Shell Sort:");
    console.log("Result:", a);
    console.log("Comparisons:", comparisons);
    console.log("Swaps:", swaps);

    return a;
};
