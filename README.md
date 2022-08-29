
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

This project was developed for studies on the Express + MongoDB course, which you can check the certificate [here](https://cursos.alura.com.br/certificate/1ec7986e-a4b6-48a3-af94-0903f3b02bbd).
