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
module.exports = {
  addReview,
  updateReview,
};
