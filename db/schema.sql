DROP DATABASE IF EXISTS burger_db;

-- Created a database burger_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

DROP TABLE IF EXISTS burgers;
-- Created burgers table.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(250) not null,
  devoured boolean default false,
  PRIMARY KEY (id)
);