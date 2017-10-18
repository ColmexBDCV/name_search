var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var personaSchema = new Schema({
  fechaNacCons: String,
  idCvuConacyt: String,
  idOrcid: String,
  idPersona: Number,
  nombres: String,
  primerApellido: String,
  segundoApellido: String,
  tipoPersona: String

});

module.exports = mongoose.model('Persona', personaSchema, 'persona');
