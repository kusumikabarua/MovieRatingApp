const ratingReviewService = require("../services/ratingReviewService");
const addReview = async (req, res) => {
  try {
    const { rating, review } = req.body;
    const { id } = req.params;
    const userId = req.user.id;
    const movieId = id;
    const newReview = await ratingReviewService.addReview({
      rating,
      review,
      userId,
      movieId,
    });

    return res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateReview = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const userId = req.user.id;

    const updatedReview = await ratingReviewService.updateReview(
      userId,
      movieId,
      reviewId,
      req.body
    );
    if (!updatedReview) {
      res.status(404).json({ message: "Review not found" });
    }
    return res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteReview = async (req, res) => {
    try {
      
      const { movieId, reviewId } = req.params;
      const userId = req.user.id;
      const deletedReview = await ratingReviewService.deleteReview(userId, movieId,reviewId);
      
      if (!deletedReview) {
        res.status(404).json({ message: "Review not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const listReviews = async (req, res) => {
    try {
     let {id} =req.params;
      const reviews = await ratingReviewService.listReviews(id);
      if (!reviews) {
        res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const averageRating = async (req, res) => {
    try {
     let {id} =req.params;
      const averageRating = await ratingReviewService.averageRating(id);
      if (!averageRating) {
        res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(averageRating);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports = {
  addReview,
  updateReview,
  deleteReview,
  listReviews,
  averageRating
};
