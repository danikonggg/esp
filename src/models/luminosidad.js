const mongoose = require("mongoose");

const luminosidadSchema = mongoose.Schema({
    tipo_dato: String,
    id_luz: Number,
    luminosidad: String,
    fecha_hora: { type: Date, default: Date.now },
    id_usuario: Number
});

module.exports = mongoose.model('luminosidad', luminosidadSchema);
