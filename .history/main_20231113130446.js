choices = {
  rock: 0,
  scissor: 1,
  paper: 2,
};

window.addEventListener("load", function () {});

function refree(machine, user) {
  let diff = Math.abs(machine - user);
  switch (diff) {
    case 0: // 가위
    case 1: // 바위
    case 2: // 보
      return diff;
    default:
      return -1;
  }
}
