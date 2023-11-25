let name = "Eccentai";
alert(`Привет, ${name}!`);


let age = 19;
alert(`Мне ${age} лет!`);


let str1 = 'САЛАМ, ';
let str2 = 'БИШКЕК!';
let result1 = str1 + str2;
alert(result1);


let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result2 = c + d;
alert(result2);


let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let time = hour + ":" + minute + ":" + second;
alert(time);


var num = 10; 
num++; 
num++; 
alert(num); 
// alert(++num)































const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      operator = button.textContent;
      display.value = '';
    } else {
      if (operator === '') {
        firstNumber += button.textContent;
        display.value = firstNumber;
      } else {
        secondNumber += button.textContent;
        display.value = secondNumber;
      }
    }
  });
});

clearButton.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  display.value = '';
});

equalButton.addEventListener('click', () => {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  firstNumber = result.toString();
  operator = '';
  secondNumber = '';
  display.value = result;
});