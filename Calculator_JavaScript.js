// creates an object to keep track of values
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

// this function modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // Check if Wait_Second_Operand is true and set Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Overwrite Display_Value if the current value is 0, otherwise, add onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// this function handles decimal points
function Input_Decimal(dot) {
    // Ensure that accidental clicking of the decimal point doesn't cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;

    // Add a decimal point if Display_Value does not already contain one
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// this function handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;

    const Value_of_Input = parseFloat(Display_Value);

    // If there's an operator and Wait_Second_Operand is true, update the operator and exit.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    if (First_Operand == null) {
        // If First_Operand is null, set it to the current input value.
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // If there's an operator, perform the calculation and update the display.
        const Value_Now = parseFloat(Display_Value) || 0;
        let result = Perform_Calculation[operator](Calculator.First_Operand, Value_Now);

        result = Number(result).toFixed(9);
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    // Set Wait_Second_Operand to true, update the operator, and reset the display value.
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// object to store functions for different operations
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand, // Change here
};

// function to reset the calculator
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// initial display update
Update_Display();

// this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element
    // that was clicked
    const { target } = event;

    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        // If the clicked element is an operator, handle the operator and update the display.
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        // If the clicked element is a decimal point, handle it and update the display.
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        // If the clicked element is the AC button, reset the calculator and update the display.
        Calculator_Reset();
        Update_Display();
        return;
    }

    // If none of the above, handle the digit input and update the display.
    Input_Digit(target.value);
    Update_Display();
});