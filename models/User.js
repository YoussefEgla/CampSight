/**
 * Required Modules
 */
const
    mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'),
    Schema = mongoose.Schema;


/**
 * Schema
 */
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    address: {
        country: String,
        city: String,
        address: String
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);