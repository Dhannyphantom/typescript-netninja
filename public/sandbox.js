"use strict";
const logDetails = (uid, item) => {
    return `${item.toLocaleUpperCase()} has ${uid} unique id`;
};
const greet = (user) => {
    return `${user.name} says Hello!`;
};
console.log(logDetails(324, "Boom box"));
let dany = {
    uid: "34",
    name: "Daniel",
};
console.log(greet(dany));
