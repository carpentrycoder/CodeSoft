const express = require("express");

const app =  express()
const router = require('./routes/auth-router');
const connectDb = require("./database");

app.use(express.json());

app.use("/",router)
app.use("/Signup",router);


connectDb().then(()=>{
app.listen(
    4000,
    () => console.log("backend is running")
)
})

// app.get(
//     "/",
//     (req,res)=>{
//         res.status(200).send("hello");
//     }
// )
