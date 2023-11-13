choices = {
  scissor: 0,
  rock: 1,
  paper: 2,
};

machineChoices = document.querySelectorAll(".machine .choice");
userChocies = document.querySelectorAll(".user .choice");

window.addEventListener("load", function () {
  machineChoices.forEach((element) => {
    element.choice = Random(0, 2);
  });

  this.setInterval(() => {
    // console.log("hello");

    machineChoices.forEach((element) => {
      if (element.classList.contains("selected") === false) {
        if (element.classList.contains("rock")) {
          element.classList.remove("rock");
        }
        if (element.classList.contains("scissor")) {
          element.classList.remove("scissor");
        }
        if (element.classList.contains("paper")) {
          element.classList.remove("paper");
        }

        element.classList.add(convertChoicesFromNumToStr(element.choice++ % 3));
      }
    });
  }, 500);
});

userChocies.forEach((element) => {
  element.addEventListener("click", function (e) {
    const selectedElement = e.target;
    let choosed = null;

    // 제일 첫번째로 나온 값을 사용자의 선택으로 간주
    selectedElement.classList.forEach((className) => {
      if (className === "rock") {
        choosed = "rock";
        return;
      } else if (className === "scissor") {
        choosed = "scissor";
        return;
      } else if (className === "paper") {
        choosed = "paper";
        return;
      }
    });

    if (choosed) {
      console.log(choosed);
    }
  });
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

function resetResultOfCss(element) {
  if (element.classList.contains("rock")) element.classList.remove("rock");
  if (element.classList.contains("scissor"))
    element.classList.remove("scissor");
  if (element.classList.contains("paper")) element.classList.remove("paper");
}

function resultCssEventer(userElement, machineElement, result) {}
