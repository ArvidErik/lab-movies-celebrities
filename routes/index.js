const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const celebritiesRoutes = require("./celebrities.routes")


module.exports = router;
