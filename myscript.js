let screen = document.querySelector('.screen');
let displayValue = "";
let firstNum = "";
let secondNum = "";
let currentOperator = "";



// 1. operations
function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

// 2. operate function
function operate(operator, a, b) {
    let result = 0;
    if(operator == '+') {
        result = add(a,b);
    };
    if(operator == '-') {
        result = subtract(a,b);
    };
    if(operator == '*') {
        result = multiply(a,b);
    };
    if(operator == '/') {
        result = divide(a,b);
    };
    return result;
};        

// 3. button assignment functions

function printScreen(event) {
    let button = event.target;
    let number = button.textContent;
    screen.textContent += number;
    displayValue += number;
}

let buttons = document.querySelectorAll('.btn');
for (i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', printScreen);
};


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


// math op btn

