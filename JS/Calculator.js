let operation = prompt("Choose an operation (+, -, *, /):");

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

let result;

switch (operation) {
    case "+":
        result = number1 + number2;
        break;

    case "-":
        result = number1 - number2;
        break;

    case "*":
        result = number1 * number2;
        break;

    case "/":
        if (number2 === 0) {
            result = "Error: Cannot divide by zero.";
        } else {
            result = number1 / number2;
        }
        break;

    default:
        result = "Error: Invalid operation.";
}

console.log("Result:", result);



