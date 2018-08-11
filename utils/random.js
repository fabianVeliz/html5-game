const random = (values) => {
  if (!Array.isArray(values)) {
    throw new Error(`[${values}] must be an array.`);
  }

  return values[Math.floor(Math.random() * values.length)]
}

module.exports = random;
