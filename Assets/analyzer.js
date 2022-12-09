const arrayAnalyzer = (arr) => {
  const maximum = arr.reduce((a,b) => Math.max(a,b));
  const minimum = arr.reduce((a,b) => Math.min(a,b));
  const mean = (arr.reduce((a,b) => a + b))/arr.length;
  const len = arr.length;

  const obj = {
    average: mean,
    min: minimum,
    max: maximum,
    length: len,
  }
  return obj
}

module.exports = arrayAnalyzer;
