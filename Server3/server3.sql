DROP DATABASE IF EXISTS Bank_DB;
CREATE DATABASE Bank_DB;

USE Bank_DB;

CREATE TABLE transactions
(
  id INT NOT NULL
  AUTO_INCREMENT,

  item_name VARCHAR
  (100) NOT NULL,

  category VARCHAR
  (45) NOT NULL,

  accountDeposit INT default 0,

  accountWithdrawal INT default 0,

  accountTransfer INT default 0,

  accountBalance INT default 0,
  
  PRIMARY KEY
  (id)
);
