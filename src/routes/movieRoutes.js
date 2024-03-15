const express= require("express");
const movieController = require("../controllers/movieController");
const ratingReviewController = require("../controllers/ratingReviewController")
const authenticateToken =require("../middleware/authenticateToken")
const router = express.Router();
router.post("/",movieController.addMovie) ;
router.post("/:id/reviews",authenticateToken,ratingReviewController.addReview) ;
router.put("/:movieId/reviews/:reviewId",authenticateToken,ratingReviewController.updateReview) ;
router.get("/",movieController.listMovies);
router.get("/:id",movieController.getMovieById);
router.put("/:id",movieController.updateMovie);
router.delete("/:id",movieController.deleteMovie);

module.exports =router;