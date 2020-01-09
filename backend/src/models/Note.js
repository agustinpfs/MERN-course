// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema(
    {
        title: String,
        content: { type: String, required: true},
        author: { type: String },
        date: { type: Date, default: Date.now }
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Note', noteSchema); //create collection Note