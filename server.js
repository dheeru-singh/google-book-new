const express = require("express");
const mongoose = require ("mongoose");
const routes = require("./routes/api-routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/api", routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdbreact";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://user123:password123@ds149806.mlab.com:49806/heroku_vr9x751c");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
