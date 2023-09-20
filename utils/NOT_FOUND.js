class NOT_FOUND extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFound';
    this.statusCode = 404;
  }
}

module.exports = NOT_FOUND;
