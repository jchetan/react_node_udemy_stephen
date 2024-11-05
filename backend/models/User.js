const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    login: String,
    name: String
});

mongoose.model('users', userSchema);