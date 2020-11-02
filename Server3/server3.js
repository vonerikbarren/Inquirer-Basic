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
  database: "Bank_DB;"
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
      name: "BankFunctions",
      type: "list",
      message: "Would you like to [View] your account balance, [Deposit] into the account, or [Withdraw] from the account?",
      choices: ["VIEW", "DEPOSIT", "WITHDRAW"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.BankFunctions === "VIEW") {
        accountView();
      }
      else if (answer.BankFunctions === "DEPOSIT") {
        accountDeposit();
      }
      else if (answer.BankFunctions === "WITHDRAW") {
        accountWithdraw();
      }
      else {
        connection.end();
      }
    });
}

//
function accountView() {
  inquirer.prompt({
  
    {
      name: "accountViewConfirm",
      type: "confirm",
      message: "Ready to view your current balance?",
      defualt: true,

    }

  })
    .then(function (inquirerResponse)) {
  function(connection.query("SELECT * FROM products", function (err, res) {

  });

}

