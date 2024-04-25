const home = async (req,res)=>{
    try{
        res.status(200).send("Controller se aaya hu mai");
    }catch(error){
        console.log(error);
    }
}

const SignupPage = async(req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json(req.body);
    }catch(error){
        console.status(500).json("internal server error ");
    }
}
module.exports={home,SignupPage}