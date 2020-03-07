/**
 * Required Modules
 */
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Schema
 */
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    address: {
        country: String,
        city: String,
        address: String
    },
    email: String
});

module.exports = mongoose.model('User', userSchema);