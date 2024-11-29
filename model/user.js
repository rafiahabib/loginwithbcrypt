const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const UserSchema=new Schema({
    bookid:{type:mongoose.Schema.Types.ObjectId, 
    ref:'Book',
    require:false
    },
    id:Number,
    email:String,
    name:String,
    password: String,
    age: Number,
    role: String,
   gender:Boolean
})
const User = mongoose.model('User',UserSchema)
module.exports = User;