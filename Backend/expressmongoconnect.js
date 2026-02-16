const express= require("express");
const mongoose= require("mongoose");
const app= express();

//MongoDB Connection
mongoose.connect('mongodb+srv://vaishnavi:admin@cluster0.0d24i95.mongodb.net/?appName=Cluster0')
    .then(()=>
    console.log("Connected to MongoDB"))
    .catch(err=>
    console.error("Could not connect to MongoDB",err));

app.get("/",(req,res)=>{
    res.send("Hello World! Express Server connected with MongoDB!");
});

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
});

