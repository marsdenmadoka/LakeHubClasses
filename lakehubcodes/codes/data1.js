let greetUser = function () {
  console.log("welcome friend!!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(5);
console.log(value);

// (fahrenheit - 32) * 5/9
let convertFahrenheitToCelsius = function (fahrenheit) {
  //let isFreezing;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  if (celsius <= 0) {
    let isFreezing = "Its very cold";
  } else if (celsius >= 150) {
    let isFreezing = "Its very hot";
  }
  return isFreezing;
};

let temp1 = convertFahrenheitToCelsius(32); // 0
let temp2 = convertFahrenheitToCelsius(212); // 100
let temp3 = convertFahrenheitToCelsius(320); // 160
console.log(temp1);
console.log(temp2);
console.log(temp3);
