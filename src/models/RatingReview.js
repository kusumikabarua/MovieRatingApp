const mongoose = require("mongoose");

const ratingReviewSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      enum: [1, 2, 3 ,4 ,5],     
    },
    review: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Movie",
    },
  },
  {
    timestamps : true,
  }
);
const RatingReview = mongoose.model("RatingReview",ratingReviewSchema);
module.exports =RatingReview;
