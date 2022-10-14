/** Staircase */
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let stairCase = "";
        for (let j = 0; j < n; j++) {
            j < n - 1 - i ? (stairCase += " ") : (stairCase += "#");
        }
        console.log(stairCase);
    }
}

/** Simple Array Sum */
function simpleArraySum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return -1;
    if (arr.length === 1) return arr[0];
    return arr.reduce((sumArr, next) => (sumArr += next), 0);
}

/**A Very Big Sum */
function aVeryBigSum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return -1;
    if (arr.length === 1) return arr[0];
    return arr.reduce((sumArr, next) => (sumArr += next), 0);
}

/**Diagonal Difference */
function diagonalDifference(arr) {
    // Initialize sums of diagonals
    let d1 = 0,
        d2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // finding sum of primary diagonal
            if (i == j) d1 += arr[i][j];

            // finding sum of secondary diagonal
            if (i == arr.length - j - 1) d2 += arr[i][j];
        }
    }

    // Absolute difference of the sums
    // across the diagonals
    return Math.abs(d1 - d2);
}

/**Plus Minus */
function plusMinus(arr) {
    // Write your code here
    let posRatio = 0;
    let negaRatio = 0;
    let zeroRatio = 0;

    arr.forEach((item) => {
        if (item > 0) {
            posRatio = posRatio + 1;
        } else if (item < 0) {
            negaRatio = negaRatio + 1;
        } else {
            zeroRatio = zeroRatio + 1;
        }
    });
    console.log((posRatio / arr.length).toFixed(6));
    console.log((negaRatio / arr.length).toFixed(6));
    console.log((zeroRatio / arr.length).toFixed(6));
}

/**Mini-Max Sum */
function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    let newArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
    }
    for (let j = 1; j < arr.length; j++) {
        maxSum += arr[j];
    }
    console.log(minSum, maxSum);
}

/**Birthday Cake Candles */
function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestCandle = 0;

    candles.forEach((element) => {
        if (element > tallestCandle) {
            tallestCandle = element;
        }
    });

    const tallestCandleArr = candles.filter(
        (candle) => tallestCandle === candle
    );
    return tallestCandleArr.length;
}

/**Time Conversion */
function timeConversion(s) {
    // Write your code here
    const isDay = s.includes("AM", 6);
    let hourStr = s.substr(0, 2);

    //PM
    if (!isDay) {
        //0-11 --> 12-23
        if (hourStr !== "12") {
            let hourNum = 12 + parseInt(hourStr);
            s = s.replace(hourStr, hourNum);
        }
    }
    //AM
    else {
        if (hourStr === "12") {
            s = s.replace(/12/i, "00");
        }
    }
    return s.slice(0, s.length - 2);
}
