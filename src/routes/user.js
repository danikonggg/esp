const express = require("express");
const userSchema = require("../models/user");
const temperaturaSchema=require("../models/temperatura");
const luminosidadSchema=require("../models/luminosidad");
const HumedadSchema=require('../models/humedad');
const router = express.Router();

// Crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data)).
    catch((error) => res.json({ message: error}));
});

//get all users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data)).
    catch((error) => res.json({ message: error}));
});

//get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data)).
    catch((error) => res.json({ message: error}));
});

//update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
    .updateOne({_id: id }, {$set: {name, age, email} })
    .then((data) => res.json(data)).
    catch((error) => res.json({ message: error}));
});

//delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id })
    .then((data) => res.json(data)).
    catch((error) => res.json({ message: error}));
});
//actualizar al temperaturas
router.put('/temperaturas/:id', (req, res) => {
    console.log("Request Body:", req.body);
    const { id } = req.params;
    const { temperatura } = req.body; // Solo necesitas la temperatura del cuerpo de la solicitud

    // Utilizando el _id para actualizar el documento
    temperaturaSchema.updateOne({ "_id": id }, { $set: { temperatura } }) // Actualiza solo la temperatura
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});


//insertar luminocidad 
router.post('/luminosidad', (req, res) => {
    const { id_luz, luminosidad, fecha_hora, id_usuario } = req.body;
    const newLuminosityData = new luminosidadSchema({ id_luz, luminosidad, fecha_hora, id_usuario });
    newLuminosityData.save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

//actualizar luminocidad 
router.put('/luminosidad/:id', (req, res) => {
    const { id } = req.params;
    const { id_luz, luminosidad, id_usuario } = req.body;

    luminosidadSchema.updateOne({ "_id": id }, { $set: { id_luz, luminosidad, id_usuario } })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ message: error.message }));
});

//actualizar al humedad 
router.put('/humedad/:id', (req, res) => {
    const { id } = req.params;
    console.log("Request Body:", req.body);
    const {humedad } = req.body;

    HumedadSchema.updateOne({"_id":id}, {$set:{humedad }})
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});
module.exports = router;

//insertar humedad 
router.post('/humedad', (req, res) => {
    const { id_hum, humedad, fecha_hora, id_usuario } = req.body;
    const newHumedadData = new HumedadSchema({ id_hum, humedad, fecha_hora, id_usuario });
    newHumedadData.save()
        .then(data => res.json(data)) 
        .catch(error => res.status(500).json({ message: error.message })); // Manejar errores
});
