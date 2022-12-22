import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter first Number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Second Number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%", "**"],
        message: "Select you operator for Calcuation:"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        case "%":
            result = numberOne % numberTwo;
            break;
        case "**":
            result = numberOne ** numberTwo;
            break;
    }
    console.log(`Your result is :${result}`);
}
else {
    console.log("Kindly input your Numbers and Operator");
}
