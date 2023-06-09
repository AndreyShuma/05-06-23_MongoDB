const mongoose = require('mongoose');
const UsrsModel = require('./models/user');



const data = {
    role: ['admin', 'manager', 'user'],
    name: 'Тарас',
    surname: '',
    birthday: 1814,
    today: Date.now()
};

const testFunc = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    await UsrsModel.create(data);
   
    await UsrsModel.updateOne({ name: 'Тарас' }, { name: 'Олег' });
    await UsrsModel.deleteOne({birthday: 1814 });
    const result = await UsrsModel.find({ surname: 'Шевченко' });
    console.log(result);
};

testFunc();

