const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://budgetdb:anasofia20@ds061365.mlab.com:61365/heroku_qmfsn7qd", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});