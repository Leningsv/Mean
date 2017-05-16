//--------------Creacion Servidor--------------//
//Imports
var express= require('express');
// decodifica la información que recibimos de un socket-cliente y lo expone en cada una de las requests mediante request.body. 
var bodyParser= require('body-parser');
// methodOverride proveee soporte par el metodo faux HTTP. 
var methodOverride = require('method-override');
var lessMiddleware = require('less-middleware');
var errorhandler = require('errorhandler')
// get an instance of router
var router = express.Router();
var http= require('http');

var app= express();

try {
  //Asignacion Puerto
  app.set('port',process.env.PORT || 3000);
  app.use(bodyParser.json({ uploadDir: '/tmp' }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(lessMiddleware(__dirname + '/../client/app'));
  app.use('/', express['static'](__dirname + '/../client/app'));
  app.use(errorhandler());
  app.use('/',router);
} catch (error) {
  console.log(error);
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});