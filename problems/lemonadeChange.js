/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] != 5) return false;
  let changes = [0, 0]; // 5s, 10s, 20s
  // soln 1
  for (let bill of bills) {
    if (bill == 5) changes[0]++;
    else if (bill == 10) {
      changes[0]--;
      changes[1]++;
    } else {
      if (changes[1] == 0) {
        changes[0] -= 3;
      } else {
        changes[0] -= 1;
        changes[1] -= 1;
      }
    }
    if (changes[0] < 0 || changes[1] < 0) return false;
  }
  return true;
  // soln 2
  for (let bill of bills) {
    if (bill == 5) {
      changes[0]++;
    } else if (bill == 10) {
      if (changes[0] == 0) return false;
      changes[1]++;
      changes[0]--;
    } else {
      if (changes[1] == 0) {
        if (changes[0] >= 3) {
          changes[0] -= 3;
        } else return false;
      } else {
        if (changes[0] > 0) {
          changes[1]--;
          changes[0]--;
        } else return false;
      }
    }
  }
  return true;
};