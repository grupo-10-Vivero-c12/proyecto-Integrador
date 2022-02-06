drop database if exists vivero_timbo;


create database if not exists vivero_timbo;

use vivero_timbo;


CREATE TABLE IF NOT EXISTS categories (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

create table IF NOT EXISTS description(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(300),
    substratum VARCHAR(300),
	flowering VARCHAR(300),
    location VARCHAR(300)
);


create table IF NOT EXISTS products (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) not null,
    discount INT default 0 not null,
    price INT NOT NULL DEFAULT 0,
    color VARCHAR(20),
    stock INT NOT NULL,
    images VARCHAR(100) DEFAULT "default-image.png",
    id_category INT UNSIGNED ,
    id_description INT UNSIGNED,
    FOREIGN KEY(id_description) REFERENCES description(id),
    FOREIGN KEY(id_category) REFERENCES categories(id)
);

create table if not exists opinions(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(300) NOT NULL,
    stars INT NOT NULL,
    id_product INT UNSIGNED NOT NULL,
    FOREIGN KEY(id_product) REFERENCES products(id)
);

create table if not exists roles(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(5) NOT NULL UNIQUE
);

create table if not exists Users(
	id INT UNSIGNED NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL,
    avatar VARCHAR(100) DEFAULT "default-image.png",
    address VARCHAR(50),
    phone BIGINT,
    cp INT(4),
    province VARCHAR(20),
    country VARCHAR(20),
    date_birth DATE,
    age INT(3),
    id_rol INT UNSIGNED NOT NULL DEFAULT 2,  
    FOREIGN KEY (id_rol) REFERENCES roles(id)
);






