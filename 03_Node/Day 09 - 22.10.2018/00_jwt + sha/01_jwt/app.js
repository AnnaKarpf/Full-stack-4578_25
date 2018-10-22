
const jwt = require('jsonwebtoken');
const crypto= require('crypto-js');

let data = {
 password: crypto.SHA256("1234").toString(),
 name:"Bob"
};

let token = jwt.sign(data, 'server secret');
console.log('encoded',token);
console.log('date now:', Date.now());
let decoded = jwt.verify(token, 'server secret');
console.log('decoded', decoded);



/*

encoded eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjAzYWM2NzQyMTZmM2UxNWM3NjFlZTFhNWUyNTVmMDY3OTUzNjIzYzhiMzg4YjQ0NTllMTNmOTc4ZDdjODQ2ZjQiLCJuYW1lIjoiQm9iIiwiaWF0IjoxNTQwMjI3NjYwfQ.Wqp0zQ72IqhJ6MtADeObt_GMF9qMV2PbyOWD93dG8K8
date now: 1540227789212
decoded { 
    password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4',
    name: 'Bob',
    iat: 1540227789 
}
*/