const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  studentID: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  access: { type: String, required: true },
  image: { type: String, required: true },
  //places is in an array because one user can have multiple places
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
