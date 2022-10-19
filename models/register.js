const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique:true
    },
    message:{
        type:String
    }

}) 
const Register = new mongoose.model("Register", employeeSchema);

module.exports=Register