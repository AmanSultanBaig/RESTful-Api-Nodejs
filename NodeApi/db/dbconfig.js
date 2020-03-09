const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connection is Established'))
    .catch(err => console.log('DB error ' + err))

module.exports = mongoose;