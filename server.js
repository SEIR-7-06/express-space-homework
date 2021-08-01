// DEPENDENCIES
const express = require('express');
const app = express();
const missions = require('./models/marsMissions.js')

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

// app.get('/missions',(req, res) => {
//   res.send(missions);
// });

app.get('/missions/', (req, res) => {
  res.render('index.ejs', {
    allMissions: missions
  })
  
})

// app.get('/fruits/new', (req, res) => {
//   res.render('index.ejs')
// })


// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.get('/missions/:missionsIndex', (req,res) => {
  res.render('show.ejs', {
    oneMission: missions[req.params.missionsIndex]
  });
});

// * Bonus/Hungry for More: User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - move this to a file called marsMissions.js inside of a models folder
// remember to export (module.exports)
// remember to require it in the server


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
