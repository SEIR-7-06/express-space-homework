// DEPENDENCIES
const express = require('express');
//Database and Modules
const marsMissions = require('./models/marsMissions.js')

//Variables
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/', (req,res) => {
  res.render('missions/index', {marsMissions})
})


// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/:id', (req,res) => {
  res.render('missions/show', {marsMissions})
})

// * Bonus/Hungry for More: User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

//MIDDLEWARE
app.set('view engine', 'ejs');

// NOTES:
// views/missions folder has not been created



// DATA - move this to a file called marsMissions.js inside of a models folder
// remember to export (module.exports)
// remember to require it in the server



//PORT
const port = 3000;


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
