const HSP_LIMIT = 127.5;

export function colorIsDark(r, g, b) {
  const hsp = Math.sqrt(
    0.299 * Math.pow(r, 2) + 0.587 * Math.pow(g, 2) + 0.114 * Math.pow(b, 2),
  );

  return hsp <= HSP_LIMIT;
}

export function generateNumber(minVal = 0, maxVal = 0, shouldRound = true) {
  let number = Math.random() * (maxVal - minVal) + minVal;

  if (shouldRound) {
    number = Math.floor(number);
  }
  return number;
}

export function generateColor() {
  const red = generateNumber(0, 255);
  const blue = generateNumber(0, 255);
  const green = generateNumber(0, 255);

  return {red, blue, green};
}

export function valueToHex(val = 0) {
  let newVal = val.toString(16).toUpperCase();

  if (Number(newVal) < 10 || val <= 15) {
    newVal = `0${newVal}`;
  }
  return newVal;
}
