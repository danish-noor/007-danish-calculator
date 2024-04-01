#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        massage: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
// conditional statment
if (answer.operator === "+") {
    console.log(`${answer.firstNumber} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "-") {
    console.log(`${answer.firstNumber} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "*") {
    console.log(`${answer.firstNumber} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "/") {
    console.log(`${answer.firstNumber} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("please select valid operator");
}
