require("dotenv").config()
const express = require("express");
const path = require("path");
const hbs = require("hbs")

const PORT = process.env.PORT || 3000;

const server = express();

const routeCatalogo = require("./routes/catalogo");
const routeIndex = require("./routes/index");
const routeContacto = require("./routes/contacto");

server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: false }));

server.set("view engine", "hbs");
server.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "./views/partials"));


server.use("/", routeIndex);
server.use("/catalogo", routeCatalogo);
server.use("/contacto", routeContacto);

server.listen(PORT, (err) => 
{
  err ? console.log("Error") : console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
