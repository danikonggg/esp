const mongoose = require("mongoose");

const temperaturaSchema = mongoose.Schema({
    tipo_dato: String,
    id_temp: Number,
    temperatura: Number,
    fecha_hora: { type: Date, default: Date.now },
    id_usuario: Number
});

module.exports = mongoose.model('sensores', temperaturaSchema);