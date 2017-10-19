var mongoose = require('mongoose');
var Persona  = mongoose.model('Persona');

//GET - Return all registers
exports.findAll = function(req, res) {
	Persona.find(function(err, personas) {
    if(err) res.send(500, err.message);
    	//console.log('GET /personas')
		res.status(200).jsonp(personas);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {

	Persona.find({ $text : { $search : req.params.id } }, { nombres:1, primerApellido:1, segundoApellido:1, idOrcid:1, idCvuConacyt:1,score: { $meta : "textScore"}}).
	sort({score: { '$meta' : "textScore"}}).
	exec(
		function(err, persona) {
	    if(err) return res.send(500, err.message);
	    //console.log('GET /personas/' + req.params.id);
			res.status(200).jsonp(persona);
		});
};
