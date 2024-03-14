const express= require("express");
const movieController = require("../controllers/movieController")
const router = express.Router();
router.post("/",movieController.addMovie) ;
router.get("/",movieController.listMovies);
router.get("/:id",movieController.getMovieById);
router.put("/:id",movieController.updateMovie);
router.delete("/:id",movieController.deleteMovie);

module.exports =router;