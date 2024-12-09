const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config(); // Ensure dotenv is properly configured

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URL from .env file
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, // Required
});

// Check for MongoDB connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection successful!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
