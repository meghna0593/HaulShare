const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  uname: { type: String, required: true },
  description: { type: String, required: false },
  duration: { type: Number, required: false },
  date: { type: Date, required: false },
});

const Exercise = mongoose.model('Exercise', exerciseSchema,'users');

module.exports = Exercise;