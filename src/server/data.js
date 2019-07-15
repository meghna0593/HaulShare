// Varun Gopalakrishnan, B00823111

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// database structure in MongoDb atlas is defined below
const DataSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
    p_lat: {
        type: String,
        required: true
    },
    p_lng: {
        type: String,
        required: true
    },
    d_lat: {
        type: String,
        required: true
    },
    d_lng: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    trip_id: {
        type: String,
        required: true
    },
    pickup_addr: {
        type: String,
        required: true
    },
    drop_addr: {
        type: String,
        required: true
    }
});

// schema is exported to modify in Node.js file
module.exports = mongoose.model("Data", DataSchema, "c_map_locations");