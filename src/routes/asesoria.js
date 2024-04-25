const express = require("express");
const router = express.Router();
const asesoriaSchema = require("../models/asesoria")

router.post("/asesorias", (req, res) => {
    const asesoria = asesoriaSchema(req.body);
    asesoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

router.get("/asesorias", (req, res) => {
    asesoriaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

router.get("/asesorias/:id", (req, res) => {
    const {id} = req.params;
    asesoriaSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

router.put("/asesorias/:id", (req, res) => {
    const {id} = req.params;
    const {estado, nombreCliente, fecha, tema, descripcion, duracion, precio} = req.body;
    asesoriaSchema.updateOne({_id: id}, {
        $set: {estado, nombreCliente, fecha, tema, descripcion, duracion, precio}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

router.delete("/asesorias/:id", (req, res) => {
    const {id} = req.params;
    asesoriaSchema.findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;