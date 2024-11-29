const User=require('../model/user')
const bcrypt=require('bcrypt')
const register = async(req,res)=>{

   try{ 
    const user = new User(req.body);
    const {password}=req.body;
    const salt=bcrypt.genSalt(10);
    const hashpass =await bcrypt.hash(password,salt);
    user.password=hashpass;
    await user.save();
    }catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}

const getSingleuser = async(req,res)=>{
    try{
    const id = req.params.id
    const user = await User.findById(id)
    res.json({"message":"user get successfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
    }

const updateuser=async(req,res)=>{
    try{
    const id=req.params.id
    const object=req.body
    const user= await User.findByIdAndUpdate(id, object,{new:true});
    res.json({"message":"update succesfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}
const deleteuser=async(req,res)=>{
    try{
    const id=req.params.id
    const user= await User.findByIdAndDelete(id)
    console.log("deleted")
    res.json({"message":"delete successfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}

 const login=async(req,res)=>{
    try{
        
        const user=await User.findOne({email:req.body.email})
        if(user && user.password===req.body.password)
            {
            res.json({"message":"login succesfully"})
         }
        else{
            res.json({"message":"invalid password"})
        }}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
 }




module.exports={
    login,
    register,
    getSingleuser,
    updateuser,
    deleteuser
}