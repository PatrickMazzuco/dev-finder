module.exports = function parseStringAsArray(str) {
  return str.split(',').map(index => index.trim());
};
