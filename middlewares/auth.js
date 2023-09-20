const jwt = require('jsonwebtoken');
const UNAUTHORIZED = require('../utils/UNAUTHORIZED');

const auth = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;

  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new UNAUTHORIZED('Unauthorized'));
  }
  req.user = payload;
  return next();
};

module.exports = auth;
