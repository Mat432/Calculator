let screen = document.querySelector('.screen');
let displayValue = "";
let firstNum = "";
let secondNum = "";
let currentOperator = "";



// 1. operations
function add(firstNum,secondNum) {
    return firstNum+secondNum;
};

function subtract(firstNum,secondNum) {
    return firstNum-secondNum;
};

function multiply(firstNum,secondNum) {
    return firstNum*secondNum;
};

function divide(firstNum,secondNum) {
    return firstNum/secondNum;
};

// 2. operate function
function operate(operator, firstNum, secondNum) {
    switch (operator) {
      case '+':
        return add(firstNum, secondNum);
      case '-':
        return subtract(firstNum, secondNum);
      case '*':
        return multiply(firstNum, secondNum);
      case '/':
        return divide(firstNum, secondNum);
      default:
        return 'Invalid operator';
    }
  };     

// 3. button assignment functions

function printScreen(event) {
    let button = event.target;
    let number = button.textContent;
    screen.textContent += number;
    displayValue += number;
};

function operatorClicked(event) {
    let button = event.target;
    let operator = button.textContent;
    firstNum = Number(displayValue);
    currentOperator = operator;
    displayValue = "";
    if (currentOperator) {
        screen.textContent += " " + operator + " ";
    } else {
        screen.textContent = operator;
    }
};

let buttons = document.querySelectorAll('.btn');
for (i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', printScreen);
};

let operands = document.querySelectorAll('.op');
for (i = 0; i < operands.length; i ++) {
    operands[i].addEventListener('click', operatorClicked);
}


// clear and delete btn
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    screen.textContent = "";
    displayValue = "";
});

const delBtn = document.querySelector('#deleteBtn');
delBtn.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
});


// equals btn

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    let secondNum = Number(displayValue);
    if (currentOperator !== '') {
        let result = operate(currentOperator, firstNum, secondNum);
        screen.textContent = result;
        displayValue = result;
    }
});

