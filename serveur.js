/**
 * Created by fabienbrun on 29/01/16.
 */
// module HTTP intégré à NodeJS : appeler la méthode require qui prend en paratres (le nom du module ou l'emplacement )
//    De manière synchrone on vient charger le module HTTP
var http = require("http");
// On définie une variable du PORT sur lequel le serveur va ecouter
var PORT = 8080;

// Dans le module HTTP , on a une méthode "createServer" qui prend en paramètre une fonction (le fameu Call back)
// Cette fonction prend en parametres req et res , la requette envoyé par le client et la reponse renvoyée
// Une fois que le serveur est lancé il faut déclencher l'écoute en appelant la méthode listen
// on passe en paramètre le port d'écoute

http.createServer(function(req, res) {
    // Reponses au client / la méthode end indique l'on a fini d'écrire la réponse
    // On peut avant d'écrire la réponse , venir écrire les headers ainsi que le code de réponse HTTP 200=tout va bien
    res.writeHead(200,{ "Content-Type" : "text/plain" });
    res.end("Hello Worlds");
}).listen(PORT);

console.log("Serveur démaré sur le port :" + PORT);
