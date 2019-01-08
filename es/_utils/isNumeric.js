var isNumeric = function isNumeric(value) {
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
};

export default isNumeric;