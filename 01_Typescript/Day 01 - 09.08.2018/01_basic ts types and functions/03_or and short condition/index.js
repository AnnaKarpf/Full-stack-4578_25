//---------------------color1--------------------
var color1 = "Pink";
console.log("color1 before condition: " + color1); //--> color1 before condition: Pink
color1 = color1 || "Green1";
console.log("color1 after || condition: " + color1); //--> color1 after || condition: Pink
color1 = (!color1) ? "Green2" : color1;
console.log("color1 after ()?: condition: " + color1); //--> color1 after ()?: condition: Pink
//---------------------color2--------------------
var color2; //color2 is undefined (undefined is false value)
console.log("color2 before condition: " + color2); //--> color2 before condition: undefined
color2 = color2 || "Green1";
console.log("color2 after || condition: " + color2); //--> color2 after || condition: Green1
color2 = (!color2) ? "Green2" : color2;
console.log("color2 after ()?: condition: " + color2); //--> color2 after ()?: condition: Green1
