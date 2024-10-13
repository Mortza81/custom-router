import express from "express";
import {myRoute,router} from "./router";
const app=express()

myRoute("/","post",(req,res)=>{
    res.status(200).json({
        message:"success"
    })
})
app.use(router);
app.listen(4000,()=>{
    console.log('app is running');
})