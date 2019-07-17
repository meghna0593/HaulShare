const express = require('express');
// connect with MongoDB using mongoose.
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 20000;

app.use(cors());
app.use(express.json());

// Connection with the database.
const uri = "mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/Db_HaulShare"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
// routing
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// check if the connection is successfull.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});