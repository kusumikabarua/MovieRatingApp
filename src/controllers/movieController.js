const movieService = require("../services/movieService");
const addMovie = async (req, res) => {
  try {
    const { title, description, genre, releaseYear, director } = req.body;
   
    const movie = await movieService.addMovie({
      title,
      description,
      genre,
      releaseYear,
      director
    });
    return res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listMovies = async (req, res) => {
  try {
    const { genre, releaseYear, director } = req.query;
    const tasks = await movieService.listMovies(genre,releaseYear,director);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await movieService.getMovieById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateMovie= async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData =req.body;

    const updatedMovie = await movieService.updateMovie(id,updatedData);
    if (!updatedMovie) {
      res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteMovie = async(req,res)=>{
    try {
    const {id} =req.params;
    const deletedMovie = await movieService.deleteMovie(id);
    if(!deletedMovie){
        res.status(404).json({ message: "Movie not found" });
    }
    res.status(204).send();
} catch (error) {
    res.status(500).json({ message: error.message });
  }

}
module.exports = {
  addMovie,
  listMovies,
  getMovieById,
  deleteMovie,
  updateMovie
};
