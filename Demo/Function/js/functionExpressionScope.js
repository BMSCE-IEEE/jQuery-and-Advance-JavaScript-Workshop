// var findFactorial = function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// };
//
// console.log(factorial(5));

// var findFactorial = function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     else {
//         return n * findFactorial(n - 1);
//     }
// };
//
// console.log(findFactorial(5));

var findFactorial = function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
};

console.log(findFactorial(5));
