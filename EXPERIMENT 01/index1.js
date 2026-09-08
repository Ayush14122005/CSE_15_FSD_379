// console.log("Hello World");
// console.log("3+6= "+(3+6));
// console.log("This is a log message");
// console.error("This is an error message");
// console.warn("This is a warning message");
// console.info("This is an information message");
// console.debug("This is a debug message");
// console.log(process.platform);
// console.log(global.Lnumber);
// global.Lnumber = "51";

// console.log(global.Lnumber);
// process.on('exit',function(){
//     console.log('good')
// })

// const{EventEmitter}=require('events');
// const eventEmitter=new EventEmitter();
// eventEmitter.on('lunch',()=>(
//     console.log('welcome')
// ));
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
const shyam = require("./xyz");
console.log("Hello",shyam.name);