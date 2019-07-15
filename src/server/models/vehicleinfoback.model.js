const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Vehicle_infoschema = new schema({
    vehicle_name: {
        type: String,
        required: true
    },
    vehicle_type: {
        type: String,
        required: true
    },
    vehicle_number: {
        type: String,
        required: true
    },
    vehicle_sharing: {
        type: String,
        required: true
    },
    space_available: {
        type: String,
        required: true
    },
    total_trips: {
        type: Number,
        required: true
    }, 
}, {
    timestamp:true,
});


const Vehicle_info = mongoose.model('Vehicle_info', Vehicle_infoschema);

module.exports = Vehicle_info;
