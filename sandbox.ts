// READY FOR LESSONS
let sum = (a: number, b: number): number => {
  return a + b;
};

const result = sum(3, 6);

console.log(result);

// EXPLICIT TYPES
let str: string;
let num: number;
let bool: boolean;

// ARRAYS
let arrNum: number[];
let arrStr: string[];

let arrObj: { name: string; age: number }[] = [];

// let obj: object;
let obj: { name: string; age: number };

obj = { name: "dan", age: 30 };

// arrObj.push({name: "yoshi"});
arrObj.push(obj);

obj.name = "Yello";

// UNION TYPE
let UID: string | number;

UID = "43fdbhfbs4";
UID = 434;
