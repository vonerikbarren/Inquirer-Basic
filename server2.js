var fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
  // Opening for the program
  {
    type: "input",
    message: "Welcome Sir, I am your assistant how cnan I help you?",
    name: "opening"
  },
  // #2 - Asking for a name
  {
    type: "input",
    message: "What is your name sir?",
    name: "username"
  },
  // #3 - What would you like to do? 
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["Create a file", "Delete a file", "Build a database"],
    name: "choices"
  },
  // #4 - What server wants...
  {
    type: "list",
    message: "What do you think I want to do? ",
    choices: ["Create a new app", "Building minecraft", "delete your hard drive"],
    name: "serverChoice"
  },
  // -=-=-=-=-=-=-=-=-
  // Final Confirm
  {
    type: "confirm",
    message: "Ready to sumbit the information sir?",
    name: "confirm",
    default: true
  },

])
  .then(function (inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("\n Welcome " + "Mr. " + inquirerResponse.username + " " + "Sir");
      console.log("\n You would like to " + inquirerResponse.choices);
      console.log("\nThats nice..." + "However, I would like to " + inquirerResponse.serverChoice);
    }
    else {
      console.log("\n Sir are you there?");
    }
  });