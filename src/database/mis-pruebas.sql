INSERT INTO categories (name)
value ("Macetas"), ("Semillas"), ("Plantas");


INSERT INTO description 
value (default, "Temperatura: 20-25 grados Iluminación: alta sin sol directo Riego: abundante en verano moderado en invierno Humedad: muy alta Abono: liquido, durante la primavera y verano",
"algo", "algo2");


INSERT INTO products 
value (default, "PHILODENDRO PERUVIANO", default, 540, "red", 50, default, 2, 1);
 
INSERT INTO roles (name)
value ("ADMIN"),("USER");

INSERT INTO users 
value (default, "Marcos Exequiel", "Britos", "prueba@gmail.com", 123456, default, default, 3515326039, 5000, "Córdoba", default, "1997-06-13", "24", 1),
(default, "Marcos Exequiel", "Britos", "exe@gmail.com", 123456, default, default, 3515326039, 5000, "Córdoba", default, "1997-06-13", "24", default),
(default, "Marcos Exequiel", "Britos", "dani@gmail.com", 123456, default, default, 3515326039, 5000, "Córdoba", default, "1997-06-13", "24", default),
(default, "Marcos Exequiel", "Britos", "estefi@gmail.com", 123456, default, default, 3515326039, 5000, "Córdoba", default, "1997-06-13", "24", default);


INSERT INTO users 
value (default, "Marcos Exequiel", "Britos", "prueba3@gmail.com", 123456, default, default, 3515326039, 5000, "Córdoba", default, "1997-06-13", "24", default);


select * from users
