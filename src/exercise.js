export function runCode(array) {
  return array.reduce((obj, item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
}
