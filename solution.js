/**Staircase */

function staircase(n) {
    // Write your code here
    for (let i = 0; i < n; i++) {
        let stairCase = "";
        for (let j = 0; j < n; j++) {
            j < n - 1 - i ? (stairCase += " ") : (stairCase += "#");
        }
        console.log(stairCase);
    }
}
