const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  studentID: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: false },
  access: { type: String, required: true },
  clubs: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Club' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
