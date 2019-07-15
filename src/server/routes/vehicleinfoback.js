const router = require('express').Router();
let vehicleinfo_var = require('../models/vehicleinfoback.model');

router.route('/').get((req, res) => {
    vehicleinfo_var.find({})
        .then(hs_data => {
            console.log(hs_data)
            res.json(hs_data)
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router; 