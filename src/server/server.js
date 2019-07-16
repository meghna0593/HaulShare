// Archanaapriya -B00811602
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { User, validate} = require('./model');

const express = require('express');
const app = express();
const corsHost = { origin: '*' };
app.use(cors());
//connecting to mongodb
mongoose.connect('mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/Db_HaulShare')
    .then(() => console.log('Successfully connected to MongoDB'))
    // error in connecting to db.
    .catch(err => console.error('Error Occured during connection', err));



//app.get('/', cors(corsHost), async(req, res) => {
//res.send('hi received')

app.use(express.json());
app.post('/login', cors(corsHost) ,async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //  Match e-mail address given by user while logging with the database
    let user = await User.findOne({ email_reg: req.body.email_reg });
    if (!user) {
        return res.status(400).send('E-mail is not yet registered.');
    }else{
  // authenticating users by checking the password match between the one stored in the database
  // and one entered by the user.
    const validPassword = await bcrypt.compare(req.body.confirm_pass, user.confirm_pass);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
  }

    res.send(true);
});

app.post('/register', cors(corsHost), async(req, res) => {
    // Validating the request from node to mongodb.
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // Checking if the user already exists or not
    // if he doesnt exist a new document is inserted into mongodb
    let user = await User.findOne({ email_reg: req.body.email_reg });
    if (user) {
        return res.status(400).send('That user already exists!');
    } else {
        // Insert the new user if the e-mail is not registered in db yet.
        user = new User({
            uname: req.body.uname,
            email_reg: req.body.email_reg,
            new_pass: req.body.new_pass,
            confirm_pass: req.body.confirm_pass,

        });
        console.log("user: " + JSON.stringify(user));
        const salt = await bcrypt.genSalt(10);
        // Hash new_pass,confirm_pass for making it secure in db.
        // Used bcrypt
        user.new_pass = await bcrypt.hash(user.new_pass, salt);
        user.confirm_pass = await bcrypt.hash(user.confirm_pass, salt);
        await user.save();
        res.send(user);
    }
});

//running on port 17008
const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//setting headers..
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');
    next();
});
