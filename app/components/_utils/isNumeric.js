const isNumeric = value =>
  !Number.isNaN(parseFloat(value)) && Number.isFinite(value);

export default isNumeric;
