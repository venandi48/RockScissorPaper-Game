choices = {
  rock: 0,
  scissor: 1,
  paper: 2,
};

machineChoice = document.getElementsByName(".machine .choice");

window.addEventListener("load", function () {
  console.log(machineChoice);
  this.setInterval(() => {
    // console.log("hello");
  }, 500);
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
