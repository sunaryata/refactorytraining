const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email : {type:String},
    username : {type:String},
    auth_cat : {type:String}
});


module.exports = mongoose.model('auth', userSchema);

