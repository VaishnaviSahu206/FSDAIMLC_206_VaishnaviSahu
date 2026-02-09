const path= require("path");

const filePath= path.join(__dirname,"files","abcd.txt");
console.log(filePath);

const filepath2= path.join(
    __dirname,
    "..",
    "..",
    "files",
    "abcd.txt");
    console.log(filepath2);

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname("employee.pdf"));
console.log(path.resolve("files","abcd.txt"));






