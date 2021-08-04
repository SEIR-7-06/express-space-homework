const express = require('express');
const router = express.Router();
const datab = require('../models/marsMissions.js')

router.get('/', (req, res) => {
    res.render('./missions/index.ejs', { allDataB: datab });
})
router.get('/:marsIndex', (req, res) => {
    res.render('./missions/show.ejs', {
        oneDataB: datab[req.params.marsIndex]
    })
})
router.post('/', (req, res) => {
    robots.push(req.body)
    res.redirect('/mars')
})

module.exports = router;