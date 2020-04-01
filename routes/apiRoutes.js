const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;




// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/posts", function(req, res) {
//     db.Post.find({}).then(function(dbPosts) {
//       res.json(dbPosts);
//     });
//   });

//   app.put("/api/posts/:id", function(req, res) {
//     db.Post.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
// };