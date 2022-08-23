// FUNCTION BASICS
// MINE

let sum: Function;

// sum = 1;
// sum  = "Dane";

sum = () => {
  console.log("calculated!");
};

let voidFunc: () => void;

voidFunc = () => {
  console.log("Hello");
  return "hello world";
};

console.log(voidFunc());

// optional params

let sumValue = (a: number, b: number, c?: string) => {
  return a + b;
};

console.log(sumValue(2, 4));
