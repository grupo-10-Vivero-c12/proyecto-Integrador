
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
# DATA DUMP FOR TABLE: descriptions
# ------------------------------------------------------------

INSERT INTO
  `descriptions` (
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
  
  
INSERT INTO users(first_name, last_name, email, password, id_rol)
value("admin_prueba", "prueba", "admin@mail.com", "123456", 1);