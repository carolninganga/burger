DROP DATABASE IF EXISTS burger_db;

-- Created a database burger_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Created burgers table.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR,
  devoured boolean,
  PRIMARY KEY (id)
);
