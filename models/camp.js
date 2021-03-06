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
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    location: String,
    description: String,
    image: String,
    city: String,
    state: String,
    zip: Number,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});


/**
 * Export Model
 */
module.exports = mongoose.model('Camp', campSchema);