/**
 * Required Modules
 */
const
    Camp = require('../models/Camp'),
    Comment = require('../models/Comment');


async function addNewComment(req, res) {
    try {
        const foundCamp = await Camp.findById(req.params.id);
        const newComment = await Comment.create(req.body.comment);
        foundCamp.comments.push(newComment);
        foundCamp.save();
        res.redirect(`/camps/${req.params.id}`);

    } catch (err) {
        console.log(err)
    }
}


module.exports = { addNewComment }