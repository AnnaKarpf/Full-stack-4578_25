const jwt = require('jsonwebtoken');
const user = require('./../00_models/user');
let init = (app) => {

    // Add client - REGISTER: 
    app.post("/api/users", (req, res) => {
        let registerUser = new user.UserModel(req.body);

        registerUser.save()
            .then(newUser => {

                //add to the response header a new property in the header
                //the token contains the user`s id
                let data = {
                    id: newUser._id
                };

                res.header('xx-auth', jwt.sign(data, 'my secret'));

                res.status(201).send(newUser);
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    });

    // Get client -LOGIN:
    // every login request must have in the headers a property named 'xx-auth'
    // with a value that concats the `sha256 password` and the `userName`
    app.get("/api/users", (req, res) => {
        let headerVal = req.header('xx-auth');
        if (headerVal) {
            user.UserModel.findOne({
                "password": headerVal.substring(0, 64),
                "userName": headerVal.substring(64, headerVal.length)
            }).then(currentUser=> {

                //add to the response header a new property in the header
                //the token contains the user`s id
                let data = {
                    id: currentUser._id
                };
                res.header('xx-auth', jwt.sign(data, 'my secret'));
                res.status(200)
                .send(JSON.stringify({"status":"login success"}));
            })
                .catch((e) => {
                    res.status(401).send();
                });
        }
        else {
            res.status(401).send();
        }
    });
}

module.exports = { init }
