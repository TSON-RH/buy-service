var mongoose = require('mongoose');
const mongoUri = 'mongodb://tson:hrsf104@ds111258.mlab.com:11258/buyingp';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
