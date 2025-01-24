const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});



module.exports = mongoose.model('user', userSchema);

