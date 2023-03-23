export default function divideFunction(numeration, denominator) {
  try {
    if (denominator === 0) {
      throw new Error();
    }
    return numerator / denominator;
  } catch (error) {
    throw Error('cannot divide by 0');
  }
}
