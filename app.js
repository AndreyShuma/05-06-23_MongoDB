const mongoose = require('mongoose');
const UsrsModel = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const data = {
    name: 'Andrey',
    surname: 'Shumeyko',
    birthday: Date.now()
};

UsrsModel.create(data);
