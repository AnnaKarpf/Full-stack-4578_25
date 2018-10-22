const book = require('./../00_models/book');

let init = (app) => {


    let managerMiddlware=(req,res,nextStep)=>{

    };


    // Get books - ALL - EVERY CLIENT CAN ACCESS: 
    app.get("/api/books", (req, res) => {
        book.BookModel.find({})
            .then(res => {
                res.status(200).send(JSON.stringify({items:res}));
            })
            .catch((e) => { res.status(400).send(e) });
    });


    // Get books - BY BOOK ID - EVERY CLIENT CAN ACCESS: 
    app.get("/api/books/id/:q", (req, res) => {
        BookModel.Book.findById(req.params.q)
            .then(res => {
                res.status(200);
                res.send(JSON.stringify(res));
            })
            .catch((e) => { res.status(400).send(e) });
    });


    // add book - ONLY CLIENT THAT IS LOGED IN AS A MANAGER CAN ADD A NEW BOOK: 
    app.post("/api/books", managerMiddlware, (req, res) => {
       
            let book = new book.BookModel(req.body);
            book.save()
                .then(() => res.status(200).send(book))
                .catch((e) => res.status(400).send(e));
       
    })
}

module.exports = { init }
