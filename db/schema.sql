DROP DATABASE IF EXISTS burger_db;

CREATE database burger_db;

USE burger_db;
CREATE TABLE burgers ( 
  id INT  NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;
USE burger_db;

INSERT INTO burgers (id, burger_name, devoured)
VALUES (1, 'cheese burger', true),
(2, 'chicken sandwich', false), 
(3, 'double cheese and bacon', true);
