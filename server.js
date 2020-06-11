var express = require("express");
var bp = require("body-parser");
var expressHandlebars = require("express-handlebars");
//var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 5000;

//added the static file
app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

//use express handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
});