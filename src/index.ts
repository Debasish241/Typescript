let age = 204_57_8_9;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [];

let user: [number, string] = [1, "Deba"];
user.push(1);

const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small = 2,
  Medium = 3,
  Large,
}

let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTION //

function calculateTax(income: number, taxYear = 2022) {
  if (taxYear < 2022) {
    return income * 12;
  }
  return income * 13;
}

calculateTax(10000, 2022);

//OBJECTS

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Deba",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.name = "Debasish";

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employe: Employee = {
  id: 1,
  name: "Deba",
  retire: (date: Date) => {
    console.log(date);
  },
};
//UNION TYPES
function kgToLbs(weight: number | string): number {
  //Narrowing

  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

//INTERSECTION TYPES

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//LITERAL TYPES

type Quantity = 50 | 100;
let quality: Quantity = 100;

type Metric = "cm" | "inch";

function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hello");
  }
}

greet("null");

//OPTIONAL CHAINING
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }

//OR

console.log(customer?.birthday?.getFullYear());

//OPTIONAL element access opearator

let log: any = null;
log?.("a");
