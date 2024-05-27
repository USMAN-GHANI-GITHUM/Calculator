// Calculator

import inquirer from "inquirer";

const Calculator = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your secoundNumber",type: "number",name: "secoundNumber" },
  {
    message: "select one operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPICATION", "DIVISION"],
  },
]);

//   CONDITIONAL STATEMENT

if (Calculator.operator === "ADDITION" ){
    console.log(Calculator.firstNumber + Calculator.secoundNumber);
} else if (Calculator.operator === "SUBTRACTION" ){
    console.log(Calculator.firstNumber - Calculator.secoundNumber);
} else if (Calculator.operator === "MULTIPICATION" ){
    console.log(Calculator.firstNumber * Calculator.secoundNumber);
} else if (Calculator.operator === "DIVISION" ){
    console.log(Calculator.firstNumber / Calculator.secoundNumber);
} 

else{"plz enter A valid Num or select valid operator"}

