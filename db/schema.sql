CREATE DATABASE IF NOT EXISTS myburgers_db;
USE myburgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOL DEFAULT false,
	calories varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
