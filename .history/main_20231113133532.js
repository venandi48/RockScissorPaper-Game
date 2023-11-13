choices = {
  rock: 0,
  scissor: 1,
  paper: 2,
};

machineChoice = document.querySelectorAll(".machine .choice");

window.addEventListener("load", function () {
  console.log(machineChoice);
  machineChoice.forEach((element) => {
    element.choice = Random(0, 2);
  });

  this.setInterval(() => {
    // console.log("hello");

    machineChoice.forEach((element) => {
      if (element.className.contains("selected")) {
      }
    });
  }, 500);
});

/// _________________________________________________________________
//                          Play Tools
/// _________________________________________________________________

function Random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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

/*
 * @machine: 컴퓨터가 선택한 숫자값
 * @user: 사용자가 선택한 숫자값
 * @return: 0=>비김, 1=> 이김, 2=>짐
 */
function refree(machine, user) {
  return Math.abs(machine - user);
}
