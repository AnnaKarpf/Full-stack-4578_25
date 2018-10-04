const fs = require("fs");  //fs = file-system

if (!fs.existsSync("./data")) { // Can't write if(!fs.exists("./data")) because will return true all the time because it is async and thus won't wait till the check complete and will alwasy enter the if.
	fs.mkdirSync("./data"); // Can write fs.mkdir("./data"); but won't be good because it is async, so if file will be written before directory is created - it will crash.
    fs.writeFileSync("./data/arr.json", "[]");
}


// Writing JSON:
let obj = {
	currentTime: Date.now(),
    currentDate: new Date().toLocaleDateString()
};

let arr=require("./data/arr.json");
arr.push(obj);

fs.writeFileSync("./data/arr.json", JSON.stringify(arr));


