import express from 'express'
import cors from "cors";

const app=express();

// apply middleware
app.use(express.json())
app.use(cors)

let users = [];
// home route---
app.get('/',(req,res)=>{
    res.send('home page successfully login')
})
// registering api--
app.post("/api/register",(req,res)=>{
    const{username,Password}=req.body;

    // validating the userid or password

    if(!username||!Password){
        return res.json({msg:"fill it for creation"});
    }
    // checking if user already exist
    const userExists=user.find(user=>user.username===username);
    if(userExists){
        return res.json({msg:"already exist"});
    }
    
    // storing user;
    users.push({username,Password});
    res.json({msg:"registration successfull"});
});







const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server works successfully http://localhost:${PORT}`)
})