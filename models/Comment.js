/**
 * Required Modules
 */
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Schema
 */
const commentSchema = new Schema({
    author: String,
    text: String,
    rating: Number
});


/**
 * Export Model
 */
module.exports = mongoose.model('Comment', commentSchema);