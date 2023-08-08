// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
// all your routes here
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((celeb) => {
      console.log("Celebrity has been created ", celeb);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      res.render("celebrities/new-celebrity");
    });
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((data) => {
      res.render("celebrities/celebrities", {data});
    })
    .catch((err) => console.log(err));
});

module.exports = router;
