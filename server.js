// DEPENDENCIES
const express = require('express');
const app = express();
module.exports = 'marsMissions.js'
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

// INDEX Route
app.get('/missions', (req, res) => {
  res.render('index.ejs' ,{
    mars: '/marsMissions/marsMissions'
  })
})
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

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


// /* Keywords */
// // Node - An environment that allows us to run our JavaScript outside of a browser and gives us some helpful server capabilities.
// // Express - A tool / package to help us build our server application.
// // NPM - Node Package Manager
// // package.json - A file that keeps a running list of all of our packages
// // node_modules - A directory that holds all of our packages
// // nodemon - Node Monitor - Listens for when we save our file and restarts the node process (restarts our server)

// /* Required Modules*/
// const express = require('express'); // Pulling in the express package into this file
// const rowdy = require('rowdy-logger')
// // Database & Models
// const fruits = require('./models/fruitModel.js') // The "database"

// /* Variables */
// const app = express(); // Creating an instance of an express app
// const port = 4000;
// const rowdyResults = rowdy.begin(app)

// /* Middleware */
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended: false})) //adds form data to req.body

// /* Routes */
// // Homepage Route
// app.get('/', (request, response) => {
//   // Listen for requests on the '/' route, and when they are received
//   // call this callback function
//   response.send('Welcome to the Fruits App');
// })

// // Index Fruit Route - retrieve many/all fruits
// app.get('/fruits', (req, res) => {
//   console.log(fruits)
//   res.render('index.ejs' ,{
//     allFruits: fruits
//   })
// })

// // New Fruit Route - retrieve a form that can be used to create new fruit
// app.get('/fruits/new', (req, res) => {
//   res.render('new.ejs')
// })
// // Show Fruit Route - retrieve one fruit
// app.get('/fruits/:fruitIndex', (req, res) => {
//   res.render('show.ejs', {
//     oneFruit: fruits[req.params.fruitIndex]
//   })
// })


// // Create Fruit Route - send data to create a new fruit
// app.post('/fruits', (req, res) => {
//   console.log(req.body)
//   fruits.push(req.body)
//   //We need to harvest the data from the form then add new fruit data into our routes
//   console.log('hi youve reached the create route')
//   res.redirect('/fruits')
// })


// /* Start the Server */
// app.listen(port, () => {
//   // Start up our server
//   // Start the server on the specified port
//   // After it starts, call the callback function
//   console.log(`Your server is running on port: ${port} 🚀`);
//   rowdyResults.print()
// });
