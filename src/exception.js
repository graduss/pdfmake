module.exports = {
  MaxTryLayoutIteration: function MaxTryLayoutIteration (message) {
    this.message = message;
    this.name = 'MaxTryLayoutIteration';
    this.stack = (new RangeError()).stack;
  }
}
