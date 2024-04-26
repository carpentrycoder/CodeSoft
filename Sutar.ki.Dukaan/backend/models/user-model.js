require('dotenv').config();
const { request } = require("express");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')


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

//json web token
userSchema.methods.generateToken = async function() {
    try{
        return jwt.sign({
            userID: this._id.toString(),
            email: this.email.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, {
            expiresIn:"365d",
        }
    );

    } catch(error){
        console.error(error);
    }
};


// Define the model or the collection name 
const User = mongoose.model("User", userSchema); // Corrected typo: new mongoose.model -> mongoose.model

module.exports = User;
