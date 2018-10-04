const fs = require('fs');

let str="";
let res=0;

for(let i=2; i<process.argv.length;i++){
    str+=process.argv[i] + " + ";
    res+=Number(process.argv[i]);
}

str=(str)?
    str.substr(0,str.length-3) + " = " + res + "\n":
    "No arguments\n";



fs.appendFileSync("res.txt", str);

