// DEPENDENCIES
const express = require('express');
const app = express();
const exports = require("exports");

app.set("view engine", "ejs");

app.get("/missions", (req, res) => {
  res.render("index.ejs", {
    missions:marsMissions
  })
})

for (i = 0; i < marsMissions.length; i++) {
  document.getElementsByClassName("missions").appendChild(marsMissions[i].name);
}

app.get("/missions/:mission", (req, res) => {
  res.render("show.ejs", {
    mission:marsMissions[req.params.mission]
  })
})

let i = 0;
let missionEl = document.createElement("ul");
missionEl.textContent = (marsMissions[i]);
document.querySelector("h1").appendChild(missionEl);

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

// INDEX Route
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
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: ""
  }
];


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = models.marsMissions;
