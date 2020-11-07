const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pets', PetSchema);
