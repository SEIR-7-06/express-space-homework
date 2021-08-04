const express = require('express')
const app = express()
const port = 3000

const missions = require('./models/marsMissions.js') 


// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

app.get('/', (req, res) => {
  res.send('Welcome to Mars Missions!')
})

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
// send back an index.ejs template to display all the missions

app.get('/missions', (req, res) => {
  console.log(missions)
  res.render('index.ejs', {
    allMissions: missions
  })
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:missionsIndex', (req, res) => {
  res.render('show.ejs', {
    oneMission: missions[req.params.missionsIndex]
  })
})  

// * Bonus/Hungry for More: User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

// module.exports = app;
