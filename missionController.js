const express = require('express')
const router = express.Router()
const marsMissions = require('./models/marsMissions')

// Index
router.get('/', (req,res) => {
    res.render('index.ejs', {
        allMissions: marsMissions
    })
})

//show
router.get('/:missionIndex', (req, res) => {
    res.render('show.ejs', {
      oneMission: marsMissions[req.params.missionIndex]
    })
  })
module.exports = router