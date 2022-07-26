import books from "../models/Book.js";

class BookController {
    static listBooks = (req, res) => {
        books.find()
        .populate("author")
        .exec((err, books) => {
            res.status(200).json(books);
        });
    }
    static listBooksById = (req, res) => {
        const id = req.params.id;
        books.findById(id)
        .populate("author", "name")
        .exec((err, books) => {
            if (err) {
                res.status(404).send({message: `${err.message} - ID not found`});
            } else {
                res.status(200).send({books});
            }
        })
    }
    static registerBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Book register failed.`});
            } else {
                res.status(201).send(book.toJSON());
            }
        });
    }
    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) res.status(200).send({message: `Book ${id} successfully updated.`});
            else res.status(500).send({message: err.message});
        });
    }
    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if (!err) res.status(200).send({message: `Book ${id} successfully deleted.`});
            else res.status(500).send({message: err.message});
        })
    }

    static getBooksByPublisher = (req, res) => {
        const pub = req.query.pub;
        books.find({"publisher": pub}, (err, books) => {
            res.status(200).send(books);
        });
    }
}

export default BookController;