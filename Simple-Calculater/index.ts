import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { name: "Number1", message: "Enter Your first number: ", type: "number" },
  { name: "Number2", message: " Enter your Second Number : ", type: "number" },
  {name: "Operator", message: " Select one of the Operator to perform operation", type: "list", choices: ["Addition", "Subtraction", "Multiplication", "division"]}
]);

//Condition Statement

if(answer.Operator === "Addition"){
    console.log("Your Answer is : ", answer.Number1 +  answer.Number2)
    
}
else if(answer.Operator === "Subtraction"){
    console.log("Your Answer is : ", answer.Number1 -  answer.Number2)
}

else if(answer.Operator === "Multiplication"){
    console.log("Your Answer is : ", answer.Number1 *  answer.Number2)
}

else if(answer.Operator === "division"){
    console.log("Your Answer is : ", answer.Number1 /  answer.Number2)
}
else{
    console.log("Wrong Operator Selection")
}