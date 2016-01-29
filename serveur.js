var http = require("http");
var fs = require("fs");
var mime = require("mime"); // installer le module mime depuis la console à la racine du projet , avec "npm install mime"
var express = require("express"); // installer le module connect depuis la console à la racine du projet , avec "npm install connect"
var serviceTables = require(__dirname + "/get-tables.js");
// midldlewares
var logger = require('morgan');
var bodyParser = require("body-parser");

var serveStatic = require("serve-static"); // Middlewere sous forme de module static  connect serveStatic  : "npm install serve-static"

var PORT = 8080;

serviceTables.genererMails();
var app = express();


app.use(logger(":method :url"));
app.use(serveStatic(__dirname ));

// API
var api = express();



// Récupérer l'objet global généré
// GET /api/dossiers
api.get("/object", serviceTables.getObject);


// Récupérer la liste des dossiers
// GET /api/dossiers
api.get("/dossiers", serviceTables.getDossiers);

// Récupérer un dossier
// GET /api/dossiers/idDossier

api.get("/dossiers/:idDossier", serviceTables.getDossier);

// Récupérer un mail
// GET /api/dossier/idDossier/idMail
api.get("/dossiers/:idDossier/:idMail", serviceTables.getMail);

app.use(bodyParser.json());

// Envoyer un mail
// POST /api/envoi
api.post("/envoi", serviceTables.envoiMail);
app.use("/api", api);
http.createServer(app).listen(PORT);
console.log("Serveur démarré sur le port " + PORT);
