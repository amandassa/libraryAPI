import mongoose from "mongoose";
mongoose.connect("mongodb+srv://amanda:24jKv74Bh7JPKUV1@nodejslibrary.ipe20.mongodb.net/NodeJSLibrary");
let db = mongoose.connection;
export default db;