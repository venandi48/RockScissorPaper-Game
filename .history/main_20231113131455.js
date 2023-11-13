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
    machineChoice.array.forEach((element) => {});
  }, 500);
});

/// _________________________________________________________________
//                          Play Tools
/// _________________________________________________________________

function convertChoicesFromNumToStr(choice) {
  switch (choice) {
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

function refree(machine, user) {
  return Math.abs(machine - user);
}
