const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  adTitle: {
    
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

const User = mongoose.model('User', userSchema,'Advertisements');

module.exports = User;