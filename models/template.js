const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    quotes: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Template', templateSchema);