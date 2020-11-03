var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bank0_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "Deposit",
      type: "list",
      message: "Would you like to [DEPOSIT], [POST], [WITHDRAW], or [VIEW BALANCE?]?",
      choices: ["DEPOSIT", "WITHDRAW", "BALANCE"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.Deposit === "DEPOSIT") {
        postDeposit();
      }
      else {
        connection.end();
      }
    });
}

// function to handle posting new items up for auction
function postDeposit() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "list",
        message: "Is this a [CREDIT] or a [DEBIT] to your account?",
        choices: ["CREDIT", "DEBIT"]

      },
      {
        name: "category",
        type: "list",
        message: "What type of deposit is this?",
        choices: ["CASH", "CHECK", "DIRECT-DEPOSIT"]
      },
      {
        name: "deposit",
        type: "input",
        message: "How much is your deposit?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO BankTransactions SET ?",
        {
          category: answer.category,
          deposit_type: answer.item,
          deposit: answer.deposit || 0,

        },
        function (err) {
          if (err) throw err;
          console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
          console.log("Your deposit was entered successfully!");
          console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
}