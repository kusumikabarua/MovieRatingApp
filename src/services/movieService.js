const Movie = require("../models/Movie");
const addMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);
    return movie;
  } catch (error) {
    throw error;
  }
};
const listMovies = async (genre, releaseYear, director) => {
  try {
    let filter = {};
    if (genre != null) {
      filter.genre = {$regex: genre, $options: 'i'}
    }
    if (releaseYear != null) {
      filter.releaseYear = {$regex: releaseYear, $options: 'i'}
    }
    if (director != null) {
      filter.director = {$regex: director, $options: 'i'}
    }
    const movies = await Movie.find(filter);
    return movies;
  } catch (error) {
    throw error;
  }
};
const getMovieById = async (movieId) => {
  try {
    const movie = await Movie.findOne({ _id: movieId });
    return movie;
  } catch (error) {
    throw error;
  }
};
const updateMovie = async (movieId, updatedData) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: movieId },
      { $set: updatedData },
      { new: true }
    );

    return updatedMovie;
  } catch (error) {
    throw error;
  }
};
const deleteMovie = async ( movieId) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete({  _id: movieId });
    return deletedMovie;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  addMovie,
  listMovies,
  getMovieById,
  deleteMovie,
  updateMovie
};
