const {
  PORT = 3000,
  mongoDB = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  PORT,
  mongoDB,
  NODE_ENV,
  JWT_SECRET,
};
