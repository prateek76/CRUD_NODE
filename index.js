let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
let app = express();
let apiRoutes = require("./api-routes");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/expense", { useNewUrlParser: true });
var db = mongoose.connection;

if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

var port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("runnning..."));

// Use Api routes in the App
app.use("/api", apiRoutes);

app.listen(port, function() {
  console.log("runnnnnnning ........");
});
