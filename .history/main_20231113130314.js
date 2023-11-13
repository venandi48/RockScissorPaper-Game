window.addEventListener("load", function () {
  //실행될 코드
});

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
