import { TIPS } from './constants';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
  const index = getRandomInteger(0, TIPS.length - 1);

  let tip = TIPS[index];
  tip.number = index + 1;

  return tip;
}

export default generate;
