
# Library Project
REST API for essential queries in a library.
## API Reference

### Database
For this project, a [MongoDB Atlas](https://www.mongodb.com/atlas/database) database is needed.
The credentials can be set in a .env file.

### Documentation
View on [SwaggerHub](https://app.swaggerhub.com/apis-docs/amandassa/LibraryAPI/1.0.0)

### Get all items

```http
  GET /books
  GET /authors
```

```http
  GET /books/:id
  GET /books/query?publisher
```