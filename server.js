// DEPENDENCIES
const express = require('express');
const app = express();
//const missionController = require('./missionController')

const missions = require('./models/marsMissions')


app.set('view engine', 'ejs');

//app.use('/marsMissions', missionController)
// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/missions/:missionIndex', (req,res) => {
  // res.send(marsMissions)
  res.render('index.ejs');
})
// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

// * Bonus/Hungry for More: User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)



// PORT
const port = 3000;


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = missions;
