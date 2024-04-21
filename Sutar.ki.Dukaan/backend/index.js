const express = require("express");

const app =  express()

app.listen(
    4000,
    () => console.log("backend is running")
)

app.get(
    "/",
    (req,res)=>{
        res.send("hello");
    }
)