const express = require("express");

const db = require("../data/models")

const router = express.Router();



router.get("/", (req, res) => {
  db.getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;