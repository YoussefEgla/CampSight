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
        await Camp.create({ title, location, description, image, city, state, zip, author: { id: _id, username } })
        // redirect to /camps
    } catch (err) {
        console.log(err);
    }
    res.redirect('/camps');
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

async function findCampForEdit(req, res) {
    try {
        await Camp.findById(req.params.id
        ).then(camp => {
            res.render('editCamp', { camp });
        }).catch(err => { throw err })
    } catch (err) {
        console.log(err)
    }
}

async function findAndEditCamp(req, res, next) {
    try {
        await Camp.findByIdAndUpdate(req.params.id, req.body.camp)
    } catch (err) {
        console.log(err)
    } finally {
        res.redirect(`/camps/${req.params.id}`);
    }
}

async function deleteCamp(req, res, next) {
    try {
        await Camp.findByIdAndRemove(req.params.id);
    } catch (err) {
        console.log(err);
    } finally {
        return res.redirect('/camps')
    }
}

module.exports = { getAllCamps, addNewCamp, findOneCamp, findCampForEdit, findAndEditCamp, deleteCamp }