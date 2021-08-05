express = require('express')
const router = express.Router()
const fruits = require('../models/missionModel.js') // The "database"

// Index Route - Retrieve many/all fruits
router.get('/', (req, res) => {
    res.render('index.ejs', {
      allMissions: missions
    })
  })

// New Route - Retrieve a form that can be used to create a new fruit
router.get('/new', (req, res) => {
    res.render('new.ejs')
  })
  
  // Show Route - Retrieve one fruit
  router.get('/:missionIndex', (req, res) => {
    res.render('show.ejs', {
      oneMission: missions[req.params.missionIndex]
    })
  })
  
  // Create Route - Send data to create a new fruit
  router.post('/', (req, res) => {
    // We need to harvest the data from the form
    // console.log(req.body)
    // Add that new fruit data into our database
    fruits.push(req.body)
    res.redirect('/fruits') // redirects to the index route
  })

  //Steps to delete a fruit
//1. Create a route to handle delteing the fruit
//2. Create a form to handle the delete request
router.delete('/:fruitIndex', (req, res) => {
    // Logic for deleting fruit
    const fruitIndex = req.params.fruitIndex;

    fruits.splice(fruitIndex, 1)

    res.redirect('/missions')
})

//UPDATE EDIT fruits controller (2 steps): need route to serve up form
//when you edit it, you will have another request to do the updating
//1: form to sumbit fruit
//2: when we submit form we need to send up some data to do the updating

//Fruit edit route - Serves a form to submit info for updating fruit
router.get('/:missionIndex/edit', (req, res) => {
    res.render('edit.ejs', {
        oneMission: fruits[req.params.missionIndex], 
        index: req.params.missionIndex
    })
})

///fruit update route /PUT
router.put('/:missionIndex/', (req, res) => {
   console.log(req.body)
//1 convert the data to correct format
if(req.body.readyForTakeOff === 'on'){
    req.body.readyForTakeOff = true
}   else {
    req.body.readyForTakeOff = false
}
//2. update to database
fruits[req.params.missionIndex] = req.body

//3. Redirect to the show page for that particular route
res.redirect('/fruits' + req.params.fruitIndex)
})
  module.exports = router
