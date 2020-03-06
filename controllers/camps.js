async function addNewCamp(req, res, next) {
    const { title, location, description, image, city, state, zip } = req.body;
    /**
     * Globals to be replaced with database CRUD operations
     */
    global.camps.push({ name: title, url: image })
    next();
}

module.exports = { addNewCamp }