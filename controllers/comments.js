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
        newComment.author.id = req.user._id;
        newComment.author.username = req.user.username;
        newComment.save();
        foundCamp.comments.push(newComment);
        foundCamp.save();
        res.redirect(`/camps/${req.params.id}`);

    } catch (err) {
        res.redirect(`/camps/${req.params.id}`);
        console.log(err)
    }
}


module.exports = { addNewComment }