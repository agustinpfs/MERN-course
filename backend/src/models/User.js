// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, //not repeated
            trim: true // no blanks
        }
    }, {
        timestamps: true
    });

module.exports = mongoose.model('User', userSchema);