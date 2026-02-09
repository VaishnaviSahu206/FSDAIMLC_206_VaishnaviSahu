const fs= require('fs');
// try{
//     const data= fs.readFileSync("data.txt","utf-8");
//     console.log("File content:",data);
// }
// catch(err){
//     console.log("Error reading this file:",err.message);
// }
// console.log("This will work after file read is completed.")
// fs.readFile("data.txt","utf8",(err,data)=>{
//     if(err){
//         console.log("Error reading file:",err.message);
//         return;
//     }
//     console.log("File content:", data);
// });
// console.log("request 2nd data from file");
// console.log("request 3rd data from file");
// fs.writeFile("code.txt","Hello coders!Welcome :) ",(err)=>{
//     if(err){
//         console.log("error:",err.message);
//         return;
//     }
//     console.log("file written successfully");
// } );

//APPENDING DATA ASYNC/NON-BLOCKING
// fs.appendFile("data.txt","\n employee added",(err)=>
// {
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log("data appended.");
// });

// fs.unlink("data.txt",(err)=>{
//     if(err){
//         console.log("file deleted");
//     }
// });
 fs.rename("code.txt","Coders.txt", (err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("File renamed successfully");
 });
