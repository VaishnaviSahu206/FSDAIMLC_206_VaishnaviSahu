const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello World! This is our first express server.");
});
app.get("/about",(req,res)=>{
    res.send("This is About Page");
});

app.post("/add",(req,res)=>{
    res.send("Information added successfully!");
});
app.put("/update",(req,res)=>{
    res.send("Information updated successfully!");
});
app.delete("/delete",(req,res)=>{
    res.send("Information deleted successfully!");
});

app.get("/file",(req,res)=>{
    res.sendFile(__dirname+"/first.html");
});
app.get("/jfile",(req,res)=>{
    res.sendFile(__dirname+"/empData.json");
});

app.get("/contact",(req,res)=>{
     res.json({name: "VAISHNAVI SAHU", email: "5n2JW@example.com", phone: "123-456-7890"});
});
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});