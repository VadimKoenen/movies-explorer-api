const Movie = require('../models/movies');
const {
  BAD_REQUEST,
  NOT_FOUND,
  FORBIDDEN,
} = require('../utils/consts');

// создание карточки
module.exports.createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user.id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BAD_REQUEST('Uncorrect data'));
      }
      return next(err);
    });
};

// получение карточек
module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movie) => res.send(movie))
    .catch(next);
};

// удаление
module.exports.deleteMovieById = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail(() => new NOT_FOUND('Not found'))
    .then((movie) => {
      if (movie.owner.toString() !== req.user.id) {
        throw new FORBIDDEN('Access is denied');
      }
      return Movie.deleteOne(movie);
    })
    .then(() => res.send({ message: 'Movie deleted' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BAD_REQUEST('Uncorrect data'));
      }
      return next(err);
    });
};
