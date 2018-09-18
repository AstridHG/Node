var express = require("express"); 
var app = express();
var http = require('http')
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var NodeWebcam = require( "node-webcam" );
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
 
 var server = app.listen(8081, function () {
    console.log('Server is running..'); 
});
 
 
 
app.get('/Movimiento', function(req, res, next) {

var opts = {

    width: 1024,
	height: 720,
	quality: 100,
    delay:0,
    saveShots: true,
	output: "jpeg",
	device: false,
	callbackReturn: "location",
	verbose: false
	};
 
var Webcam = NodeWebcam.create( opts );
Webcam.capture( "test_picture", function( err, data ) {} );
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
 });
Webcam.list( function( list ) {
var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
 
});
var opts = {
    callbackReturn: "base64"
};

const transport = nodemailer . createTransport ( {
    service : 'Gmail' , 
    auth : { 
        user : 'arqui1seccionb2s@gmail.com' , 
        pass : 'arqui1seccionb' , 
    } 
} ) ;
const mailOptions = { 
    from: 'arqui1seccionb2s@gmail.com' , 
    to: 'arqui1seccionb2s@gmail.com' , 
    subject: '¡MOVIMIENTO!' , 
    html: '¡MOVIMIENTO !' , 
    
    attachments: [{
        filename: 'test_picture.jpg',
        path: 'test_picture.jpg'
    }]
} ;
transport . sendMail ( mailOptions , ( error , info ) => {   
    if ( error ) {  
        console . log ( error ) ;
    }
    console . log ( `Mensaje enviado : $ { info . respuesta } ` ) ;
} ) ;
	res.end('CORREO ENVIADO EXITOSAMENTE')

});



//Ejemplo: POST http://localhost:8080/items
app.post('/Post', function(req, res) {
   res.end('Add ');
});

app.get('/Foto', function(req, res) {
  res.end('sin movimiento')
  
  const transport = nodemailer . createTransport ( {
    service : 'Gmail' , 
    auth : { 
        user : 'arqui1seccionb2s@gmail.com' , 
        pass : 'arqui1seccionb' , 
    } 
} ) ;
const mailOptions = { 
    from: 'arqui1seccionb2s@gmail.com' , 
    to: 'arqui1seccionb2s@gmail.com' , 
    subject: '¡MOVIMIENTO!' , 
    html: '¡MOVIMIENTO !' , 
	
	attachments: [{
		filename: 'test_picture.jpg',
		path: 'test_picture.jpg'
	}]
} ;
transport . sendMail ( mailOptions , ( error , info ) => {   
    if ( error ) {  
        console . log ( error ) ;
    }
    console . log ( `Mensaje enviado : $ { info . respuesta } ` ) ;
} ) ;
});

