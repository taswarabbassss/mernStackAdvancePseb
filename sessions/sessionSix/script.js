class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + " It's a " + this.model;
  }
}
document.write("----------- Classes -----------------");
document.write("<br>");
const mycar = new Model("Ford", "Mustang");
document.write(mycar.show());
document.write("<br>");
helo = (val) => {
  return "Hello " + val;
};
document.write("----------- Arrow Functions -----------------");
document.write("<br>");
document.write(helo("I am Tasawar.."));
document.write("<br>");
const myArray = ["Pakistan", "Turkey", "Iran"];
const myList = myArray.map((item) => item + " Is a Country... ");
document.write("----------- Array Methods MAP -----------------");
document.write("<br>");
document.write(myArray);
document.write("<br>");
document.write(myList);

const vehicles = ["mustang", "f-150", "expedition"];
const [car, , suv] = vehicles;
document.write("<br>");
document.write("----------- Destructuring Arrays -----------------");
document.write("<br>");
document.write(car, suv);
document.write("<br>");

function calculate(a, b) {
  const add = a + b;
  const multiply = a * b;
  const subtract = a - b;
  const divide = a / b;
  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
document.write(add);
document.write("<br>");
document.write(subtract);
document.write("<br>");
document.write(multiply);
document.write("<br>");
document.write(divide);
document.write("<br>");

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicleFunction = ({ type, color, brand, model }) => {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + " .";
  return message;
};
document.write("----------- Destructuring Objects -----------------");
document.write("<br>");
document.write("<br>");
document.write(myVehicleFunction(vehicleOne));

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
document.write("<br>");
document.write("----------- Spread Operator -----------------");
document.write("<br>");
const numbersCombined = [...numbersOne, ...numbersTwo];
document.write("<br>");
document.write(numbersOne);
document.write("<br>");
document.write(numbersTwo);
document.write("<br>");
document.write(numbersCombined);

const [one, two, ...rest] = numbersCombined;
document.write("<br>");
document.write(one);
document.write("<br>");
document.write(two);
document.write("<br>");
document.write(rest);
document.write("<br>");

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
document.write("<br>");
document.write(myUpdatedVehicle);

document.write("<br>");
document.write("<br>");
document.write("----------- Ternary Operator -----------------");
document.write("<br>");

const unit = "kilometer";
unit === "miles"
  ? document.write("Unit is Miles")
  : document.write("Unit is Kilometer");
