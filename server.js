import express from 'express';
import mongoose from 'mongoose';
import stored from './models/logindata.js';
import bodyParser from 'body-parser';

const app=express();
const port=3000;
const conn=await mongoose.connect('mongodb://localhost:27017/');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("Working!!");
})

app.post('/submit',(req,res)=>{
  const {name,email,phone,password,message}=req.body;
  const first=new stored({name:name,email:email,phone:phone,password:password,message:message});
  first.save();
  res.redirect('/');  
})

app.listen(port,()=>{
    console.log(`App listening at port ${port}`);
})