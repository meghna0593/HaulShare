const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  adTitle: {
    
    // add validations for each field.
    // for eg: field's value is required,
    // it's minimum length should be 3 characters.
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  strgDim: {
    
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  destination: {
    
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  source: {
    
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  userType: {
    
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 1
  }
});

// Fetch the details from "Advertisements" collection/table
// in MongoDB Atlas.
const User = mongoose.model('User', userSchema,'Advertisements');

module.exports = User;