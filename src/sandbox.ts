let greet: (a: string, b: string) => void;

greet = (name, greeting) => {
  console.log(`${name} says ${greeting.toLowerCase()}`);
  return "hello";
};

greet("Daniel", "Wassup");

type Person = {
  name: string;
  uid: string | number;
  age: number;
};

let formatPerson: (a: Person) => Person;

const firstPerson: Person = {
  age: 50,
  name: "Daniel",
  uid: "134fjd",
};

formatPerson = (student) => {
  student.name = student.name.toUpperCase();
  console.log(student.age.toFixed(1));
  student.age = Number(student.age.toFixed(1));

  return student;
};

console.clear();
console.log(formatPerson(firstPerson));
