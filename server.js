var express = require("express");
var exphbs = require("express-handlebars");


var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", "/assets/style.css", routes)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(process.env)
});
  
