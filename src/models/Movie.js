const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie",movieSchema);
module.exports =Movie;
