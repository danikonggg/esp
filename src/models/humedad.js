const mongoose = require("mongoose");

const HumedadSchema = mongoose.Schema({
    tipo_dato: String,
    id_hum: Number,
    humedad: Number,
    fecha_hora: { type: Date, default: Date.now },
    id_usuario: Number
});

module.exports = mongoose.model('humedadds', HumedadSchema);