export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return 'Is okay';
}

export function taskNext() {
  let combination = 'but sometime let';
  combination += getLast();

  return combination;
}
