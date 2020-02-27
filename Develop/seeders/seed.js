var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/serviceWorkerDemo", {
  useNewUrlParser: true
});

var postSeed = [
  {
    description: "Enter your expenses here",
    title: "Expenses"
    
 },
  {
    description: "Enter your deposits here",
    title: "Deposits",
},
  
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
