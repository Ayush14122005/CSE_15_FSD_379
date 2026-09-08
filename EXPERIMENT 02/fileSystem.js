const fs = require('fs');

// Create 
fs.writeFileSync("data.txt","Hello Students");

// Read
console.log(fs.readFileSync("data.txt","utf-8"));

// Update
fs.appendFileSync("data.txt","Welcome to Node.js");

// Read updated data
console.log(fs.readFileSync("data.txt","utf-8") );

// Delete
fs.unlinkSync("data.txt");

console.log("File deleted successfully");