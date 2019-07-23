// Varun Gopalakrishnan, B00823111

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// database structure in MongoDb atlas is defined below
const DataSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
  uname: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  accepted: {
    type: Number,
    required: true
  },
  tripFee: {
    type: String,
    required: true
  }
});

// schema is exported to modify as required in server file.
module.exports = mongoose.model("Data", DataSchema, "Advertisements");
