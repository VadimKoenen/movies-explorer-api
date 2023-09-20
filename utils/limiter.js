// лимитер
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Превышен лимит на количество запросов',
});

module.exports = limiter;
