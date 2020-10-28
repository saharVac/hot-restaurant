// dependencies
var express = require("express");
var path = require("path");

//  express
var app = express();
var PORT = process.env.PORT || 2999; // DYNAMIC PORT

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
// data
//   - ID
//   - Name
//   - Email
//   - Phone
var waitList = []

// ROUTES
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/addRes", function(req, res) {
  res.sendFile(path.join(__dirname, "addRes.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// DISPLAY RESERVATIONS
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// MAKING RESERVATION
app.post("/api/tables", function(req, res) {
  var reservation = req.body;

  reservation.routeName = reservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(reservation);

  reservations.push(reservation);

  res.json(reservations);
});

// Starts the server to begin listening 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});