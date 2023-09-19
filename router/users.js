const router = require('express').Router();

const {
  updateProfile,
  getUserData,
} = require('../controllers/users');

const {
  updateProfileValidation,
} = require('../middlewares/validation');

router.get('/me', getUserData);

router.patch('/me', updateProfileValidation, updateProfile);

module.exports = router;
