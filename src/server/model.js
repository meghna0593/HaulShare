// Archanaapriya -B00811602
// Used Joi boilerplate
const Joi = require('joi');
const mongoose = require('mongoose');
// Used mongoose to connect to db.

const User= mongoose.model('User', new mongoose.Schema({
    uname: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 25
    },
    email_reg: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    new_pass: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 100
    },
    confirm_pass: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    }

}));

// Validating user.
function validateUser(user) {
    const schema = {
        // User name should be 5 letters minimum.
        uname: Joi.string().min(5).max(25),
        email_reg: Joi.string().min(5).max(100).required().email(),
        new_pass: Joi.string().min(5).max(100),
        confirm_pass: Joi.string().min(5).max(100).required()

    };
    return Joi.validate(user, schema);
}


exports.User = User;
exports.validate = validateUser;
