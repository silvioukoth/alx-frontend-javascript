export default function hasValuesFromArray(se, arr) {
  for (const i of arr) {
    if (!se.has(i)) {
      return false;
    }
  }
  return true;
}
