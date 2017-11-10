Esqueleto simple en Express y NodeJS para busquedas de autocompletado con MongoDB e indices compuestos de texto usando mongoose.

Inspirado en:  http://www.programacion.com.py/web/javascript/tutorial-api-rest-usando-node-js-express-mongodb

Se requiere tener instalado MongoDB y una copia de todos los resgistros de la base de datos del endpoint "persona" de conacyt cargados en una coleccion.

db: conacyt

collection: persona


Adicionalmente se deben generar los indices de texto para la colección persona de la siguiente manera:

  db.persona.createIndex({ nombres : "text", primerApellido : "text", segundoApellido: "text"})
