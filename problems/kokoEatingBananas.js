/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let maxPile = 0;
  for (let pile of piles) maxPile = Math.max(pile, maxPile);
  let minPile = 1;
  while (minPile <= maxPile) {
    let eatingPile = (minPile + maxPile) >> 1;
    const totalHrs = getTotalHrs(eatingPile, piles);
    if (totalHrs <= h) {
      maxPile = eatingPile - 1;
    } else {
      minPile = eatingPile + 1;
    }
  }
  return minPile;
};

function getTotalHrs(eatingPile, piles) {
  let totalHrs = 0;
  for (let pile of piles) {
    totalHrs += Math.ceil(pile / eatingPile);
  }
  return totalHrs;
}