const fs = require("fs");

// fs.writeFile("message.text", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("I love my bou!");
// });

fs.readFile("./message.txt", "utf8", (err,data) =>{
    if(err) throw err;
    console.log(data);
});