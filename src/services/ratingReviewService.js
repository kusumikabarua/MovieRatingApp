const RatingReview = require("../models/RatingReview");
const addReview = async (reviewData) => {
  try {
    const review = await RatingReview.create(reviewData);
    return review;
  } catch (error) {
    throw error;
  }
};
const updateReview = async (userId,movieId,reviewId, updatedData) => {
    try {
      const updatedReview = await RatingReview.findOneAndUpdate(
        { userId: userId, _id: reviewId ,movieId :movieId},
        { $set: updatedData },
        { new: true }
      );
  
      return updatedReview;
    } catch (error) {
      throw error;
    }
  };
module.exports ={
    addReview,updateReview
  }