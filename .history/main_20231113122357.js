function refree(machine, user) {
  let diff = Math.abs(machine - user);
  switch (diff) {
    case 0:
    case 1:
    case 2:
      return diff;
    default:
      return -1;
  }
}
