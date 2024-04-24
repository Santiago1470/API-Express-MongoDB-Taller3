const parser = require("body-parser");
const express = require("express");
const app = express();
const puerto = 3000;
const asesoriaRoutes = require("./routes/asesoria");
const mongoose = require("mongoose");

require('dotenv').config();
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.use("/api", asesoriaRoutes);
app.use(express.json());
// console.log(process.env.MONGODB_URI);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa."))
    .catch((error) => console.log(error));

app.listen(puerto, () => {
    console.log(`Aplicacion corriendo en el puerto ${puerto}`);
});