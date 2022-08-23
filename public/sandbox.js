"use strict";
// FUNCTION BASICS
// MINE
let sum;
// sum = 1;
// sum  = "Dane";
sum = () => {
    console.log("calculated!");
};
let voidFunc;
voidFunc = () => {
    console.log("Hello");
    return "hello world";
};
console.log(voidFunc());
// optional params
let sumValue = (a, b, c) => {
    return a + b;
};
console.log(sumValue(2, 4));
