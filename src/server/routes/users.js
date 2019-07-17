const router = require('express').Router();
let User = require('../models/user.model');

// get all the user details
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add the user details.
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const storageSpace = req.body.storageSpace;
  const destination = req.body.destination;
  const typeOfUser = req.body.typeOfUser;

  // save all the details in an object.
  const newUser = new User();
  newUser.username = username;
  newUser.storageSpace = storageSpace;
  newUser.destination = destination;
  newUser.typeOfUser = typeOfUser;

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;