// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//   if (req.url === "/read-employee") {

//     fs.readFile("empData.json", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("File not found");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(data);
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
// });

// const http= require("http");
// const fs= require("fs");
//  const server= http.createServer((req,res)=>{
//   if( req.url === "/write-employee"){
//     //JSON DATA(Javascript object)
//     const empData ={
//       id:101,
//       name:"SHIKHA",
//       department: "AI"
//     };
//     fs.writeFile(
//       "empData.json",
//       JSON.stringify(empData, null, 2),(err)=>{
//         if(err){
//           res.writeHead(500, {"Content-Type": "text/plain"});
//           res.end("Error writing JSON File");
//           return;
//         }
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({message: "Employee JSON written successfully"}));
//       }
//     );
//   } else{
//     res.writeHead(404, {"content-type": "text/plain"});
//     res.end("Route not found");
//   }
//  });
//  server.listen(3000,()=>{
//   console.log("Server running on http://localhost:3000");
//  });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/read-employee") {

    fs.readFile("empData.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File not found");
        return;
      }
//CONVERT JSON STRING TO JS OBJECT
      const employee =JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employee));
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});