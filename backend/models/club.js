const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubname: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    clubCat: {type: String, required: true},
    users: [{ type: mongoose.Types.ObjectId, required: false, ref: 'User' }],
    events: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Event' }]
});

clubSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Club', clubSchema);