DROP DATABASE IF EXISTS PFESQL;
CREATE DATABASE PFESQL;
USE PFESQL;
CREATE TABLE POSTS(
    name VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    url LONGTEXT,
    price INTEGER,
    id INTEGER


)