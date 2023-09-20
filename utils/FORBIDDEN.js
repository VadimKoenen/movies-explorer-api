class FORRIBDEN extends Error { // 403 отказ в правах доступа
  constructor(message) {
    super(message);
    this.name = 'Forbidden';
    this.statusCode = 403;
  }
}

module.exports = FORRIBDEN;
