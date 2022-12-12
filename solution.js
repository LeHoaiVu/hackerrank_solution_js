/** Staircase 
 * 
staircase(6)
      #
     ##
    ###
   ####
  #####
 ######
*/
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let stairCase = "";
        for (let j = 0; j < n; j++) {
            j < n - 1 - i ? (stairCase += " ") : (stairCase += "#");
        }
        console.log(stairCase);
    }
}

/**
 * Staircase
staircase(6)
  #     
  ##    
  ###   
  ####  
  ##### 
  ######
 */
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let step = " ";

        for (let j = 0; j < n; j++) {
            if (j <= i) {
                step += "#";
            } else {
                step += " ";
            }
        }
        console.log(step);
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

// compress character 'aaaabbcccddd' --> '4a2b3c3d'
const countStr = (str) => {
    let newstr = "";
    let count = 1;

    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            count += 1;
        } else {
            newstr += `${count}${str.charAt(i)}`;
            count = 1;
        }
    }
    console.log(newstr);
};

let op = vu.replace(/(.)\1+/g, function (match, first) {
    return match.length + first;
});

/**Grading Students */
function gradingStudents(grades) {
    // Write your code here
    var multipleToRoundTo = 5;
    var numberToRoundAt = 2;
    for (var i = 0; i < grades.length; i++) {
        if (
            grades[i] >= 38 &&
            grades[i] % multipleToRoundTo > numberToRoundAt
        ) {
            grades[i] =
                grades[i] +
                (multipleToRoundTo - (grades[i] % multipleToRoundTo));
        }
    }
    return grades;
}

/**Rectangle check remain 1 point x, y */
function solution(v) {
    let kcy = 0,
        x = 0,
        y = 0;
    // x = v[0][0] + v[1][0] - v[2][0]
    // y = v[0][1] + v[1][1] - v[2][1]

    if (v[0][0] === v[1][0]) {
        kcy = Math.abs(v[0][1]) + Math.abs(v[1][1]);
        x = v[2][0];
        y = kcy - v[2][1];
    }

    if (v[1][0] === v[2][0]) {
        kcy = Math.abs(v[1][1]) + Math.abs(v[2][1]);
        x = v[0][0];
        y = kcy - v[0][1];
    }

    if (v[0][0] === v[2][0]) {
        kcy = Math.abs(v[0][1]) + Math.abs(v[2][1]);
        x = v[1][0];
        y = kcy - v[1][1];
    }

    return [x, y];
}

/**
    add(1)(2)(3)(); //6
    add(1)(1)(1)(1)(1)(1)(); //6 
*/
function add(x) {
    return function (y) {
        if (typeof y !== "undefined") {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}

/**
  add(1)(2)(); //3
 */
function add(x) {
    return function (y) {
        return x + y;
    };
}

/**
 * from "plant/tree/apple/vu/vudt"
 * to {
 *     plant: {
 *          tree: {
 *              apple: {
 *                  vu: {
 *                      vudt: true
 *                  }
 *              }
 *          }
 *     }
 *     }
 */
const plant_str = "plant/tree/apple/vu/vudt";

function setValueByPath(obj, path, value) {
    var ref = obj;

    path.split("/").forEach(function (key, index, arr) {
        ref = ref[key] = index === arr.length - 1 ? value : {};
    });

    return obj;
}
var object = {};
setValueByPath(object, plant_str, true);
console.log(object);

//Giai thua
const factorial = (num) => {
    if (num === 0) return 1;
    return num * factorial(num - 1);
};

//reverse string
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

const reverseStringSecMethod = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
};

//Tim chu co nhieu ky tu nhat trong cau
//Find the Longest Word in a String
function findLongestWordLength(str) {
    let splitedArr = str.split(" ");
    let maxLength = 0;
    for (let i = 0; i < splitedArr.length; i++) {
        if (splitedArr[i].length > maxLength) {
            maxLength = splitedArr[i].length;
        }
    }
    return maxLength;
}

//Tim tung phan tu lon nhat trong mang 2 chieu
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largestArr = [];
    for (let i = 0; i < arr.length; i++) {
        let maxEl = Math.max(...arr[i]);
        largestArr.push(maxEl);
    }
    return largestArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//So sanh target co giong phan cuoi cua chuoi hay khong
function confirmEnding(str, target) {
    if (str.slice(-target.length) !== target) return false;
    return true;
}

confirmEnding("Bastian", "n");

//Repeat a string with given number of times
function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));

//Truncate a String
//truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
function truncateString(str, num) {
    if (num >= str.length) return str;
    return str.substring(0, num) + "...";
}

//Finders Keepers
//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
function findElement(arr, func) {
    if (arr.every(func)) return undefined;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

//Title Case a Sentence
//titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
function titleCase(str) {
    let strArrLower = str.toLowerCase().split(" ");
    for (let i = 0; i < strArrLower.length; i++) {
        strArrLower[i] =
            strArrLower[i][0].toUpperCase() +
            strArrLower[i].substring(1, strArrLower[i].length);
    }
    return strArrLower.join(" ");
}

titleCase("I'm a little tea pot");

//Slice and Splice
//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
function frankenSplice(arr1, arr2, n) {
    let arrResult = [...arr2];
    arrResult.splice(n, 0, arr1);
    while (arrResult.some((item) => Array.isArray(item))) {
        arrResult = [].concat(...arrResult);
    }

    //   arr2.flat(Infinity)
    return arrResult;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Falsy Bouncer
//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
function bouncer(arr) {
    // let arrResult = [...arr].filter(el => !!el)
    let arrResult = [...arr].filter(Boolean);
    return arrResult;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
function getIndexToIns(arr, num) {
    let result = 0;
    let arrTemp = [...arr];
    arrTemp.sort((a, b) => a - b);
    arrTemp.forEach((el) => {
        if (el < num) result++;
    });
    return result;
}

getIndexToIns([40, 60], 50);

//Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
//mutation(["ate", "date"]) should return false.
function mutation(arr) {
    let lowerCaseArr = [];
    for (let i = 0; i < arr.length; i++) {
        lowerCaseArr.push(arr[i].toLowerCase().split(""));
    }
    for (let j = 1; j < arr.length; j++) {
        return lowerCaseArr[j].every((c) => lowerCaseArr[0].includes(c));
    }
}

mutation(["hello", "hey"]);
