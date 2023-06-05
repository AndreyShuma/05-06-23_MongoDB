const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name: { type: String},
    surname :{type: String},
    birthday: { type: Date}
  });
  
  const model = mongoose.model('user', schema);
  module.exports = model;

const test = { a:10, b:20};
const {a, b} = test;
console.log('a>>>', a);
console.log('b>>>', b);