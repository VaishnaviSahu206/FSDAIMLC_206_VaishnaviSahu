console.log("nodejs is working");
const catme= require('cat-me');
console.log(catme());

 
const http = require("http"); //import

const server = http.createServer((req,res) => {
    res.end("Hello world, this is our first server! \n");
});

const PORT=2001;
server.listen(PORT, ()=>{
    console.log("server is running on port->" +PORT);
});
// let a=10;
// let b=20;
// console.log(a+b);

// function greet(name){
//     console.log("Hello" + name);
// }
// greet(" Vaishnavi! :)");
 
// const add= require("./math");
// console.log(add(5,7));