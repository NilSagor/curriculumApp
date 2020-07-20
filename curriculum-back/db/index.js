const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/curriculumapp', {useNewUrlParser: true, useUnifiedTopology: true});

const Curriculum = require('./curriculum')
// const Curriculum = mongoose.model('Curriculum', { name: String });

// const curriculum = new Curriculum({ name: 'Javascript' });
// curriculum.save().then(() => console.log('meow! curriculum saved'));
module.exports = {
    Curriculum
}