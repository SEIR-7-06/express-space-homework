// DEPENDENCIES
const express = require('express');

const marsMissions = require('./models/marsMissions');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show


// INDEX Route
app.get('/', (req, res) => {
  res.render('missions/index', {missions: marsMissions})
});

// the view should display just the names of each mission


// SHOW Route
app.get('/missions/:id', (req, res) => {
  missionID = req.params.id;
  res.render('missions/show', {mission: marsMissions[missionID]});
});


// * Bonus/Hungry for More: User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)


// PORT
const port = 4005;


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
