import express from "express";
import BookController from "../controller/booksController.js";

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .post('/books', BookController.registerBook)

export default router;