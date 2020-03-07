/**
 * Required Modules
 */
const Camp = require('../models/camp');


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
        // Add Camp to database
        await Camp.create({ title, location, description, image, city, state, zip });
        // redirect to /camps
        res.redirect('/camps');

    } catch (err) {
        console.log(err);
    }
}

async function findCamp(req, res) {
    try {
        // find camp with id
        const camp = await Camp.findById(req.params.id);
        // render show template
        res.render('showOneCamp', { camp })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllCamps, addNewCamp, findCamp }