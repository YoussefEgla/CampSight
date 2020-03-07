/**
 * Required Modules
 */
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Schema
 */
const campSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: String,
    description: String,
    image: String,
    city: String,
    state: String,
    zip: Number
});


/**
 * Export Model
 */
module.exports = mongoose.model('Camp', campSchema);