const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const home = async (req, res) => {
    try {
        res.status(200).send("Controller se aaya hu mai");

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const SignupPage = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "User already exists" });
        } 

         const saltRound = 10;
         const hash_password = await bcrypt.hash(password,saltRound);

        // Create new user
        const newUser = await User.create({ username, email, phone, password:hash_password });


        res.status(200).json({ 
             data: newUser ,
             msg:"registration succesfull !!",
             token:await newUser.generateToken(),
             userId:newUser._id.toString(),
            });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const {email,password}= req.body;
        const userlogin = await User.findOne({email });
        console.log(userlogin)

        if(!userlogin)
        {
            return res.status(400).json({message:"inavlid credentials"});
        }
        const user = await bcrypt.compare(password,userlogin.password);
        if(user){
            res.status(201).json({ 
                msg:"login successfull !!",
                token:await userlogin.generateToken(),
                userId:userlogin._id.toString(),
               });
        } else{
            res.status(401).json({message:"Invalid email or password"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { home, SignupPage, login};
