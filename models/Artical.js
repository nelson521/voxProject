let mongoose = require('mongoose');
let Note = require('./Note');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    require: true
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]

})

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article; 
