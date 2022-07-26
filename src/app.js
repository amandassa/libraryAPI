import express from "express";
import db from "./config/dbconnect.js";
import books from "./models/Book.js"
import routes from "./routes/index.js";

db.on("err", console.log.bind(console, "Database connection error."));
db.once("open", () => {
    console.log("Database connection successfully established.");
});

const app = express();

app.use(express.json());

routes(app);

app.get('/books/:id', (req, res) => {
    res.json(books[getBookIndex(req.params.id)]).status(200);
});

app.put('/books/:id', (req, res) => {
    books[getBookIndex(req.params.id)]['title'] = req.body.title;
    res.send('Successfully updated.').status(200);   //updated successfully
});

app.delete('books/:id', (req, res) => {
    let { id } = req.params;
    let index = getBookIndex(id);
    books.splice(index, 1);
    res.send(`Successfully removed.`);
});

function getBookIndex (id) {
    return books.findIndex(book => book.id == id);
}

export default app;