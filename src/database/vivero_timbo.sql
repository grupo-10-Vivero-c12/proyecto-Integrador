/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: categories
# ------------------------------------------------------------

drop database vivero_timbo;

create database vivero_timbo;
use vivero_timbo;


CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: description
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `description` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(300) DEFAULT NULL,
  `substratum` varchar(300) DEFAULT NULL,
  `flowering` varchar(300) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: opinions
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `opinions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(300) NOT NULL,
  `stars` int(11) NOT NULL,
  `id_product` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `opinions_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: products
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL DEFAULT 0,
  `color` varchar(20) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `images` varchar(100) DEFAULT 'default-image.png',
  `id_category` int(10) unsigned DEFAULT NULL,
  `id_description` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_description` (`id_description`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_description`) REFERENCES `description` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 20 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: roles
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(80) NOT NULL,
  `avatar` varchar(100) DEFAULT 'default-image.png',
  `address` varchar(50) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `cp` int(4) DEFAULT NULL,
  `province` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `date_birth` date DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `id_rol` int(10) unsigned NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: categories
# ------------------------------------------------------------

INSERT INTO
  `categories` (`id`, `name`)
VALUES
  (1, 'Macetas');
INSERT INTO
  `categories` (`id`, `name`)
VALUES
  (2, 'Semillas');
INSERT INTO
  `categories` (`id`, `name`)
VALUES
  (3, 'Plantas');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: description
# ------------------------------------------------------------

INSERT INTO
  `description` (
    `id`,
    `description`,
    `substratum`,
    `flowering`,
    `location`
  )
VALUES
  (1, NULL, NULL, NULL, NULL);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: opinions
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: products
# ------------------------------------------------------------

INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    1,
    'JARDINERA DISEÑOS ROTOMOLDEADO',
    0,
    3400,
    NULL,
    1000,
    '1644032770034_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    2,
    'PIRAMIDAL BAJO DISEÑOS ROTOMOLDEADO',
    0,
    1400,
    NULL,
    100,
    '1644032833176_img_.jpg',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    3,
    'ÁFRICA RÚSTICA ROTOMOLDEADO',
    0,
    4500,
    NULL,
    100,
    '1644032898209_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    4,
    'COMÚN ROTOMOLDEADA',
    0,
    19200,
    NULL,
    100,
    '1644032936768_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    5,
    'ANDINA RÚSTICA ROTOMOLDEADA',
    0,
    4500,
    NULL,
    100,
    '1644033005065_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    6,
    'JARDINERA LISA ROTOMOLDEADA (RAYUN)',
    0,
    7100,
    NULL,
    100,
    '1644033082712_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    7,
    'ANDINA LISA ROTOMOLDEADA',
    0,
    4500,
    NULL,
    100,
    '1644033176592_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    8,
    'VASO ALTO ROTOMOLDEADO',
    0,
    12000,
    NULL,
    100,
    '1644033233071_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    9,
    'CÓNICA LISA CON PLATO',
    0,
    1200,
    NULL,
    100,
    '1644033321328_img_.jpeg',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    10,
    'COLONIAL CON PLATO LE PARC',
    0,
    850,
    NULL,
    100,
    '1644033349369_img_.png',
    1,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    11,
    'ALEGRÍAS DEL HOGAR',
    0,
    140,
    NULL,
    100,
    '1644033439538_img_.jpg',
    3,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    12,
    'CRASAS',
    0,
    250,
    NULL,
    100,
    '1644033488626_img_.jpeg',
    3,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    13,
    'KALANCHOE FLORAL',
    0,
    390,
    NULL,
    100,
    '1644033534793_img_.jpg',
    3,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    14,
    'BUXUS SEMPERVIRENS',
    0,
    490,
    NULL,
    100,
    '1644033602889_img_.png',
    3,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    15,
    'JAZMÍN DEL CABO',
    0,
    2500,
    NULL,
    100,
    '1644033654272_img_.jpg',
    3,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    16,
    'Semillas Hortalizas',
    0,
    100,
    NULL,
    100,
    '1644033730529_img_.png',
    2,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    17,
    'SEMILLAS AROMÁTICAS',
    0,
    130,
    NULL,
    100,
    '1644033763505_img_.png',
    2,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    18,
    ' SEMILLAS FLORALESs',
    0,
    130,
    NULL,
    100,
    '1644033845287_img_.png',
    2,
    1
  );
INSERT INTO
  `products` (
    `id`,
    `name`,
    `discount`,
    `price`,
    `color`,
    `stock`,
    `images`,
    `id_category`,
    `id_description`
  )
VALUES
  (
    19,
    'SEMILLAS DE BERMUDA',
    0,
    260,
    NULL,
    100,
    '1644033953434_img_.png',
    2,
    1
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: roles
# ------------------------------------------------------------

INSERT INTO
  `roles` (`id`, `name`)
VALUES
  (1, 'ADMIN');
INSERT INTO
  `roles` (`id`, `name`)
VALUES
  (2, 'USER');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users
# ------------------------------------------------------------


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
