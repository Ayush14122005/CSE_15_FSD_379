// Synchronus is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.
// function sum(){
//     console.log("2");
// }
// function example(){
//     console.log("1");
//     sum();
//     console.log("3");
// }
// example();


// Asynchronus is a non blocking architecture, so the execution of one task isn't dependent on another .
// Task can run simultaneously
function sum(){
    setTimeout(() =>{
        console.log("2");
    },2000);
}
function example(){
    console.log("1");
    sum();
    console.log("3");
}
example();