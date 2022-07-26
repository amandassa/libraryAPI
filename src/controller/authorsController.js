import authors from "../models/Author.js";

class AuthorController {
    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            if (err) res.status(404).send({message: err.message});
            else res.status(200).json(authors);
        });
    }
    static listAuthorsById = (req, res) => {
        const id = req.params.id;
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({message: `${err.message} - ID not found`});
            } else {
                res.status(200).send({authors});
            }
        })
    }
    static registerAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Author register failed.`});
            } else {
                res.status(201).send(author.toJSON());
            }
        });
    }
    static updateAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) res.status(200).send({message: `Author ${id} successfully updated.`});
            else res.status(500).send({message: err.message});
        });
    }
    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err) => {
            if (!err) res.status(200).send({message: `Author ${id} successfully deleted.`});
            else res.status(500).send({message: err.message});
        })
    }
}

export default AuthorController;