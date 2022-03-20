const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventname: { type: String, required: true },
    images: [{ type: String, required: false }],
    group: {type: mongoose.Types.ObjectId, required: true, ref: 'Group' }
});