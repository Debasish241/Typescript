"use strict";
let age = 2045789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, "Deba"];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
let mySize = 3;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 12;
    }
    return income * 13;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Deba",
    retire: (date) => {
        console.log(date);
    },
};
let employe = {
    id: 1,
    name: "Deba",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quality = 100;
function greet(name) {
    console.log(name.toUpperCase());
}
greet("Deba");
//# sourceMappingURL=index.js.map