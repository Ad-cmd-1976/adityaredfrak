import mongoose from 'mongoose';

const dataSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:[4,"Name should be minimum 4 length"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please enter your email"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter your number"],
        minLength:[10,"Please enter atleast 10 digits"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"]
    },
    message:{
        type:String,
        minLength:[2,"Please enter more"]
    }
});

export const data=mongoose.model('data',dataSchema);
export default data;