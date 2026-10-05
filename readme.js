// using Node.js's built in event module, create an EventEmiiter . Register multiple listner for a respnse event, then emit the event by passing name and id as argument and display them in the console



const EventEmitter = require("events");

const event = new EventEmitter();

// Listener 1
event.on("response", (name, id) => {
    console.log("Listener 1:");
    console.log("Name:", name);
    console.log("ID:", id);
});

// Listener 2
event.on("response", (name, id) => {
    console.log("Listener 2:");
    console.log("Name:", name);
    console.log("ID:", id);
});

// Emit event
event.emit("response", "Ayush", 101);





