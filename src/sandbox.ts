type strNum = string | number;
type user = { uid: strNum; name: string };

const logDetails = (uid: strNum, item: string) => {
  return `${item.toLocaleUpperCase()} has ${uid} unique id`;
};

const greet = (user: user) => {
  return `${user.name} says Hello!`;
};

console.log(logDetails(324, "Boom box"));

let dany = {
  uid: "34",
  name: "Daniel",
};

console.log(greet(dany));
