
//For LocalHost mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieproject');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting to database"));

db.once('open',function(){
    console.log("Connected to Database");
});

module.exports = db;