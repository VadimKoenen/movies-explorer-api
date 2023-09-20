const router = require('express').Router();

const {
  createMovie,
  getMovies,
  deleteMovieById,
} = require('../controllers/movies');

const {
  createMovieValidation,
  movieValidation,
} = require('../middlewares/validation');

router.post('/', createMovieValidation, createMovie);
router.get('/', getMovies);
router.delete('/:_id', movieValidation, deleteMovieById);

module.exports = router;
