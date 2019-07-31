// Varun Gopalakrishnan, B00823111

const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./myAdsModel.js");

const API_PORT = process.env.PORT || 5565;
const app = express();

//allow cors in the server
app.use(cors());
const router = express.Router();

// MongoDB Atlas connection string
const dbRoute =
  "mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/Db_HaulShare";

// connects the backend with the MongoDB atlas
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// enable logging and use bodyParser to parse the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this method fetches the specific document based on the user_id and accepted
router.get("/getData/:accepted/:user_id", (req, res, next) => {
  Data.find(
    { user_id: req.params.user_id, accepted: req.params.accepted },
    (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    }
  );
});

// append /api for the http requests as per standards
app.use("/api", router);

// launch the backend into the port defined
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
