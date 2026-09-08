// In this code snippet, we are using the built-in 'os' module in Node.js to retrieve and display various system-related information. The 'os' module provides a number of operating system-related utility methods and properties.
const os = require("os")
console.log("Free Memory: "+os.freemem());
console.log("Total Memory: "+os.totalmem());
console.log("Platform: "+os.platform());
console.log("Architecture: "+os.arch());
console.log("CPU Info: "+os.cpus());
console.log("Home Directory: "+os.homedir());
console.log("Hostname: "+os.hostname());11