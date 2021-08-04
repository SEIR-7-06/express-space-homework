const express = require('express')
const router = express.Router()
const marsMissions = require('./models/marsMissions')

router.get('/', (req,res) => {
    res.render('index.ejs', {
        allMissions: marsMissions
    })
})


module.exports = router