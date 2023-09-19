class CONFLICT extends Error {
  constructor(message) {
    super(message);
    this.name = '409 Conflict';
    this.statusCode = 409;
  }
}
module.exports = CONFLICT;
