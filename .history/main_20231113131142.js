choices = {
  rock: 0,
  scissor: 1,
  paper: 2,
};

machineChoice = document.querySelectorAll(".machine .choice");

window.addEventListener("load", function () {
  console.log(machineChoice);
  this.setInterval(() => {
    // console.log("hello");
  }, 500);
});

function refree(machine, user) {
  let diff = Math.abs(machine - user);
  switch (diff) {
    case choices.rock:
      return "rock";
    case choices.scissor:
      return "scissor";
    case choices.paper:
      return "paper";

    default:
      return "";
  }
}
