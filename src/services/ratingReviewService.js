const RatingReview = require("../models/RatingReview");
const addReview = async (reviewData) => {
  try {
    const review = await RatingReview.create(reviewData);
    return review;
  } catch (error) {
    throw error;
  }
};
const updateReview = async (userId, movieId, reviewId, updatedData) => {
  try {
    const updatedReview = await RatingReview.findOneAndUpdate(
      { userId: userId, _id: reviewId, movieId: movieId },
      { $set: updatedData },
      { new: true }
    );

    return updatedReview;
  } catch (error) {
    throw error;
  }
};
const deleteReview = async (userId, movieId,reviewId) => {
    try {
      const deletedReview = await RatingReview.findOneAndDelete({ userId: userId, _id: reviewId, movieId: movieId });
      return deletedReview;
    } catch (error) {
      throw error;
    }
  };
  const listReviews = async (movieId) => {
    try {
      const reviews = await RatingReview.find({ movieId: movieId });
      return reviews;
    } catch (error) {
      throw error;
    }
  };
  const averageRating = async (movieId) => {
    try {
      const ratings = await RatingReview.find({ movieId: movieId }).select('rating -_id');
      let averageRating =0;
      for(let i=0;i<ratings.length;i++){
        averageRating+= ratings[i].rating;
      }
      averageRating=averageRating/(ratings.length);
      console.log("averageRating",averageRating);
      return averageRating;
    } catch (error) {
      throw error;
    }
  };
module.exports = {
  addReview,
  updateReview,
  deleteReview,
  listReviews,
  averageRating
};
