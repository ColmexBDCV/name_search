var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/conacyt', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and Controllers
var models     = require('./models/persona')(app, mongoose);
var personaCtrl = require('./controllers/personas');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {
   res.send("Hola Mundo");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/persona')
  .get(personaCtrl.findAll);
  //.post(personaCtrl.add);
api.route('/personas/:id')
  .get(personaCtrl.findById);
  // .put(personaCtrl.update)
  // .delete(personaCtrl.delete);

app.use('/api', api);


// Start server
app.listen(5050, function() {
  console.log("Node server running on http://localhost:5050");
});
