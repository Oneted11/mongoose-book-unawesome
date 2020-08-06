const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  author: String,
  section: {
    name: String,
    id: String,
    chapters: {
      id: String,
      paragraph: {
        id: String,
        Content: String,
      },
    },
  },
});

module.exports=mongoose.model("book",bookSchema)