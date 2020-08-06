const express = require("express");
const mongoose = require("mongoose");
const bookSchema = require("./book.model");

const port = 4000;
const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("I'm alive");
});

app.post("/create-book", (req, res) => {
  bookSchema.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send.json({
        message: err.mesage,
      });
    } else {
      res.json({ id: data.id });
    }
  });
});
app.listen(port, () => {
  console.log(`app listening on at http://localhost:${port}`);
});
