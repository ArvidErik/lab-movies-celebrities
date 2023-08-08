// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// all your routes here
router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities });
    })
    .catch((err) =>
      console.log(`Err while displaying post input page: ${err}`)
    );
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create({ title, genre, plot, cast })

    .then((newMovie) => {
      console.log("Movie has been saved ", newMovie);
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((err) => console.log(err));
});

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  Movie.findById(id)
    .populate("cast")
    .then((data) => {
      console.log(data);
      res.render("movies/movie-details", data);
    })
    .catch((err) => console.log(err));
});

router.post("/movies/:id/delete", (req, res) => {
  const { id } = req.params;

  Movie.findByIdAndRemove(id)
    .then((data) => {
      console.log(data);
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});


router.get("/movies/:id/edit", async (req,res)=>{
    const {id} = req.params

    try {       
        const movie = await Movie.findById(id)
        const celebrities = await Celebrity.find()
        res.render("movies/edit-movie", movie, celebrities)
    }
    catch (err){

    }
})


router.post("/movies/:id/edit", (req,res)=>{

})










module.exports = router;
