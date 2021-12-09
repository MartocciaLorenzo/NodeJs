var express = require("express");
var apiServer = express();
var fs = require("fs");

console.log("funziona");

var port = 3000;
var host = "localhost";

apiServer.listen(port, host, () => {
  console.log("server running at https://%s:d%", host, port);
});

apiServer.get("/", (request, response) => {
  console.log("sono in get /", request);
  response.send("<h1> Ciao client sei in home </h1>");
});

var nome = "Martoccia";
apiServer.get("/nome", (request, response) => {
  console.log("richiesta get su nome");
  response.send("Ciao il mio nome è: " + nome);
});

apiServer.get("/mioNome", (request, response) => {
  console.log("richiesta get su mioNome", request.query.nome);
  response.send("Ciao il mio nome è: "+request.query.nome);
});

apiServer.get("/somma", (request, response) => {
  console.log("somma request", request.query.nome);
  response.send("risultato = " + (parseInt(request.query.a) + parseInt(request.query.b)));
});

apiServer.get("/sudenti", (request, response) => {
  console.log("student id: ", request.query.id);
  //leggere il file
  fs.readFile("studenti.json", (err, data) => {
    if(err){
      console.log("error: "+err);
    } 
    else{
      var students = JSON.parse(data);
      response.send(
        students.find(x => x.id === request.query.id)
      )
    };
  });
  //preleva l'oggetto con id 1
  //send
});