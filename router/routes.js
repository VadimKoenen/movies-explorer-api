const router = require('express').Router();

const userRouter = require('./users');
const moviesRouter = require('./movie');
const auth = require('../middlewares/auth');
const {
  login,
  createUser,
  logout,
} = require('../controllers/users');
const {
  signInValidation,
  userValidation,
} = require('../middlewares/validation');
const { NOT_FOUND } = require('../utils/consts');

router.post('/signin', signInValidation, login);
router.post('/signup', userValidation, createUser);
router.get('/signout', logout);

router.use(auth);

router.use('/movies', moviesRouter);
router.use('/users', userRouter);
router.use('*', (_, res, next) => {
  next(new NOT_FOUND('Page not found'));
});

module.exports = router;
