// DYNAMICS;
// But only use when you're not sure what the type is.
let age: any = 50;

age = "Daniel";

let mixed: any[] = [];

mixed.push(1, "2", false, { name: "Dan" }, [1, 2, 3]);

console.table({ mixed, age });
