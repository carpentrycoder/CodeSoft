const { request } = require("express");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true, // Corrected typo: require -> required
    },
    email:{
        type: String,
        require: true, // Corrected typo: require -> required
    },
    phone:{
        type: String,
        require: true, // Corrected typo: require -> required
    },
    password:{
        type: String,
        require: true, // Corrected typo: require -> required
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});


// Define the model or the collection name 
const User = mongoose.model("User", userSchema); // Corrected typo: new mongoose.model -> mongoose.model

module.exports = User;
