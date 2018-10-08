# Heroku Runtime
Your apps run inside smart containers in a fully managed runtime environment, we handle everything critical for production — configuration, orchestration, load balancing, failovers, logging, security, and more.

# How to deploy an node.js app to Heroku

* craete a new account in heroku: 
https://signup.heroku.com/login
* download nodeJS and git 
* open the nodeJS command prompt, and install globaly the heroku:
```bash
npm i -g heroku
```
* go to : `"C:\Users\jbt\AppData\Roaming\npm"`, and check that heroku was installed successfully

* Set your global git config:
```bash
git config --global user.name "Anna Karp"
git config --global user.email "anakarpf6@gmail.com"
```

* craete a new folder for the node js app:
```bash
mkdir test
```

* change your path to this folder:
```bash
cd test
```

* now, init this app with a package.json folder, with the following command:
```bash
npm init -y
```

* install localy to your nodejs app the express pkg:
```bash
npm i -s express
```

* create in the "test" folder, a new file, named `app.js`
* insert into `app.js` the following code:
```javascript
var express = require('express');
var app = express();

app.get("/", function(req,res){
  res.send("<h1>Welcome to our first app</h1>")
});

app.listen(process.env.PORT||3500, function () {
    console.log("server is listening");
});
```

* go to package.json file , and add this config:
```json
 {
 "scripts": {
    "start": "node app"
  },
  "engines": {
    "node":"8.11.3"
  }
}
```

* create in the "test" folder, a new file, named `.gitignore` with the following content:
```bash
/node_modules
```
* init `test` directory wit git, by the fiollowing command:
```bash
git init
```

* add to the git stage all the `test` directory content:
```bash
git add .
```

* save to git  all the `test` directory content:
```bash
git commit -m "your message"
```

* login to your heroku account with the following command:
```bash
heroku login
```


* create a new heroku app to the `test` project
```bash
heroku apps:create jb
```

* push all the saved git content, to the new heroku app:
```bash
git push heroku master
```

* open your new app in the browser, by the follwing command:
```bash
heroku open
```

# Deploy your changes To heroku
* login to your heroku account with the following command:
```bash
heroku login
```

* Clone the current project to your comuter
```bash
heroku git:clone -a jb
```
* Make some changes to the code you just cloned and deploy them to Heroku using Git.

* change your path to this folder:
```bash
cd arieluniv
```

* add to the git stage all the modified content:
```bash
git add .
```

* save to git:
```bash
git commit -m "your message"
```

* push all the saved git content, to the new heroku app:
```bash
git push heroku master
```

* open your modified app in the browser, by the follwing command:
```bash
heroku open
```