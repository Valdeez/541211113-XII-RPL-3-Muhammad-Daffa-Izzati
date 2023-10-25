const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isikan nama terlebih dahulu'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Isikan email valid']
    },
})

module.exports = mongoose.model('userModel', userSchema)