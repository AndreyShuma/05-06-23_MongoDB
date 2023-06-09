const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    role: [{type: String}],
    name: { type: String},
    surname :{type: String},
    birthday :{type: Number},
    today: { type: Date}
  });
  
  const model = mongoose.model('user', schema);
  
  module.exports = model;

// const test = { a:10, b:20};
// const {a, b} = test; 
// console.log('a>>>', a);
// console.log('b>>>', b);