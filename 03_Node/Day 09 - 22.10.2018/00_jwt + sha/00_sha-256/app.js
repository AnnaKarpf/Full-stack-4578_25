const crypto = require('crypto-js');

//------example to testing the hash--------
 const message1 = 'abcde';
 const hash1 = crypto.SHA256(message1).toString();
 
 console.log(`Message1: ${message1}, Message1.length: ${message1.length}`);
 console.log(`Hash1: ${hash1} , Hash1.length: ${hash1.length}`);



 const message2 = 'abcdeabcde';
 const hash2 = crypto.SHA256(message2).toString();

 console.log(`Message2: ${message2}, Message2.length: ${message2.length}`);
 console.log(`Hash2: ${hash2} , Hash2.length: ${hash2.length}`);


/*
 OUTPUT:
______________________________
Message1: abcde, Message1.length: 5
Hash1: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c , Hash1.length: 64
Message2: abcdeabcde, Message2.length: 10
Hash2: cebc9901cbfa1fefe338c2630921cfd8b93705882cab415c1118711e45c7bbf2 , Hash2.length: 64
*/

