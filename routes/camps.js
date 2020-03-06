/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router();

/**
 *  temporary data
 */
const camps = [
    { name: "Camp 1", url: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
    { name: "Camp 2", url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" },
    { name: "Camp 3", url: "https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" }
]
/**
* Routes
*/
router.route('/')
    .get((req, res) => {
        res.render('camps', { camps })
    });

module.exports = router