var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  title: String,
  alive: Boolean
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;