const fs = require("fs");  //fs = file-system

if (!fs.existsSync("./data")) { // Can't write if(!fs.exists("./data")) because will return true all the time because it is async and thus won't wait till the check complete and will alwasy enter the if.
	fs.mkdirSync("./data"); // Can write fs.mkdir("./data"); but won't be good because it is async, so if file will be written before directory is created - it will crash.
}

// ----------------------------Writing JSON----------------------:
let p1 = {
	firstName: "Bob",
	lastName: "Alice"
};
fs.writeFileSync("./data/person.json", JSON.stringify(p1));


// ----------------------------Writing txt----------------------:
fs.writeFileSync("./data/txt1.txt", "Hello world");



// ----------------------------Reading JSON----------------------:
fs.readFile("./data/person.json", "utf-8", (err, data)=>{
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	console.log("action 0: "+data);
});


// Read json:
let p2 = require("./data/person.json"); // Will return object
console.log("action 1: "+p2.firstName + " " + p2.lastName);


// ----------------------------Reading txt----------------------:
fs.readFile("./data/txt1.txt", "utf-8", (err, data)=>{
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	console.log("action 2: "+data);
});


// ----------------------------Reading non- existing file----------------------:

fs.readFile("./data/noTxt.txt", "utf-8", function(err, data){
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	console.log("action 3: "+"err.code " + err.code);
});



/*
OUTPUT:
___________________________

action 1: Bob Alice
action 3: err.code ENOENT
action 0: {"firstName":"Bob","lastName":"Alice"}
action 2: Hello world

*/