// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({

    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Do you really want to know more about me? (I'm flattered)"}, 
      {method: "GET", path: "/api/selfcare", despcription: "Index of all the things I wish existed, the places I want to go, things I want to do, & things I want" },
      {method: "POST", path: "/api/selfcare", description: "Create new selfcare item"},
      {method: "PUT", path: "/api/selfcare/:id", description: "Edit a selfcare item and update it"},
      {method: "DELETE", path: "/api/selfcare/:id", description: "Delete a selfcare item"}
      //extra: check off a selfcare item
      //extra extra: search for a selfcare item
    ]
  })
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Siri",
    githubUsername: "salay",
    githubLink: "http://www.github.com",
    githubProfileImage: "really",
    personalSiteLink: "deploymentInProgress",
    currentCity: "San Francisco",
    previouslyLived: [
      {address: "0n The Bayou", cityName: "New Orleans", state: "Louisiana", country: "U.S."}, 
      {address: "21 Jump St.", cityName: "Vancouver", state: "British Columbia", country: "Canada"}, 
      {address: "12 Grimmauld Pl.", cityName: "London", state: "n/a", country: "England"}
    ]
  });
});

app.get('/api/selfcare', (req, res) => {
  db.selfCare.find(function (err, selfCare) {
    if (err) {
          console.log("error: " + err);
        }
        res.json(selfCare);
  });
})



// app.get('/api/books', (req, res) => {
// // send all books as JSON response
//  db.Book.find(function(err, books){
//   if (err) {
//     console.log("index error: " + err);
//     res.sendStatus(500);
//   }
//   res.json(books);




// // create new book
// app.post('/api/books', function (req, res) {
//   // create new book with form data (`req.body`)
//   const newBook = new db.Book ({
//     title: req.body.title,
//     image: req.body.image,
//     author: req.body.author,
//     releaseDate: req.body.date
//   });
//   newBook.save((err, newBook) => {
//     if (err) {
//       throw err;
//     }
//     console.log(` saved ${newBook.title}`)
//     res.json(newBook);
//   })
// });

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
