create database if not exists vivero_timbo;

use vivero_timbo;


CREATE TABLE IF NOT EXISTS categories (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

create table IF NOT EXISTS description(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(300) NOT NULL,
    sustrato VARCHAR(300) NOT NULL,
    floración VARCHAR(300) NOT NULL
);


create table IF NOT EXISTS products (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) not null,
    discount INT default 0 not null,
    price INT NOT NULL DEFAULT 0,
    color VARCHAR(20),
    stock INT NOT NULL,
    images VARCHAR(100) DEFAULT "default-image.png",
    id_category INT UNSIGNED NOT NULL,
    id_description INT UNSIGNED NOT NULL,
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
    

