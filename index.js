//ROTAS
const express = require("express");
//ACESSO FORA DO PROJETO
const cors = require("cors");
//CONEXÃO COM BANDO
const Sequelize = require("sequelize");
const handlebars = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./routes"));

app.listen(4000, () => {
  console.log("Notifications Started at port 4000");
});
