const mongoose = require("mongoose");
const asesoriaSchema = mongoose.Schema({
    estado: {
        type: String,
        required: true,
    },
    nombreCliente: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: false,
    },
    tema: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
    duracion: {
        type: Number,
        required: false,
    },
    precio: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model("Asesoria", asesoriaSchema)