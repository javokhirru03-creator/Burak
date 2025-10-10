console.log("Hello World");

import moment from "moment";

const correctTime = moment().format("YYYY-MM-DD HH:mm:ss");
const person: string = "Nick";
const age: number = 22;
console.log(`At ${correctTime}, ${person} is ${age} years old.`);
