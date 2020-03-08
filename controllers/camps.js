/**
 * Required Modules
 */
const Camp = require('../models/Camp');


async function getAllCamps(req, res) {
    try {
        // fetch All camps from database
        const camps = await Camp.find({});
        // render template
        res.render('showAllCamps', { camps });

    } catch (err) {
        console.log(err);
    }
}

async function addNewCamp(req, res) {
    try {
        // destruct values from body object
        const { title, location, description, image, city, state, zip } = req.body;
        const { _id, username } = req.user
        // Add Camp to database
        await Camp.create({ title, location, description, image, city, state, zip, author: { id: _id, username } }).then(created => console.log(created));
        // redirect to /camps
        res.redirect('/camps');

    } catch (err) {
        console.log(err);
    }
}

async function findOneCamp(req, res) {
    try {
        // find camp with id
        await Camp.findById(req.params.id
        ).populate('comments'
        ).exec(
        ).then(camp => {
            res.render('showOneCamp', { camp });
        }
        ).catch(err => { throw err })

    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllCamps, addNewCamp, findOneCamp }