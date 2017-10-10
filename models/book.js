// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({ //hand edit//
    title: String,
    author: {
    	type: Schema.Types.ObjectId,
    	ref: 'Author'
  	},
    image: String,
    releaseDate: String
 });

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;