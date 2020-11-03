DROP DATABASE IF EXISTS Bank0_DB;
CREATE DATABASE Bank0_DB;

USE Bank0_DB;

CREATE TABLE auctions
(
  id INT NOT NULL
  AUTO_INCREMENT,
  category VARCHAR
  (45) NOT NULL,
  deposit_type VARCHAR
  (100) NOT NULL,
  deposit INT default 0,
  PRIMARY KEY
  (id)
);

