choices = {
  scissor: 0,
  rock: 1,
  paper: 2,
};

let machineChoiceSpeed = 250; // default machine's speed of chainge choice (ms단위).

playboxes = document.querySelectorAll(".playbox");
userChocies = document.querySelectorAll(".user .choice");
controlBtns = document.querySelectorAll(".playbox .control");

playboxes.forEach((playbox) => {
  playbox
    .querySelector(".machine .choice")
    .querySelector("input[type=hidden]").value = Random(0, 2);
});

controlBtns.forEach((controlBtn) => {
  replayBtn = controlBtn.querySelector("input[type=button][value=Replay]");
  replayBtn?.addEventListener("click", (e) => {
    replay(controlBtn.parentElement);
  });
});

window.addEventListener("load", function () {
  this.setInterval(() => {
    playboxes.forEach((playbox) => {
      let machineChoice = playbox.querySelector(".machine .choice");

      if (machineChoice.classList.contains("selected") === true) return;

      if (machineChoice.classList.contains("rock")) {
        machineChoice.classList.remove("rock");
      }
      if (machineChoice.classList.contains("scissor")) {
        machineChoice.classList.remove("scissor");
      }
      if (machineChoice.classList.contains("paper")) {
        machineChoice.classList.remove("paper");
      }
      machineChoice.querySelector("input[type=hidden]").value =
        (machineChoice.querySelector("input[type=hidden]").value + 1) % 3;
      machineChoice.classList.add(
        convertChoicesFromNumToStr(
          +machineChoice.querySelector("input[type=hidden]").value
        )
      );
    });
  }, machineChoiceSpeed);
});

userChocies.forEach((element) => {
  element.addEventListener("click", function (e) {
    const selectedElement = e.target;
    let choosed = null;

    if (selectedElement.parentElement.classList.contains("selected")) return;

    selectedElement.parentElement.classList.add("selected");

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
      let sameAreaMachine =
        element.parentElement.parentElement?.querySelector(".machine .choice");

      if (sameAreaMachine) {
        gameResultCssEventer(
          selectedElement,
          sameAreaMachine,
          refree(
            +sameAreaMachine.querySelector("input[type=hidden]").value,
            choices[choosed]
          )
        );
      }
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

function addHistory(playbox) {
  let node = playbox.cloneNode(true);
  let controlBtns = node.querySelector(".control");

  node.classList.add("done");
  node.removeChild(controlBtns);
  node.innerHTML += `<div class="log"><div class="played-time">${new Date().toLocaleString()}</div></div>`;

  document.querySelector(".sidenav").append(node);
}

function replay(playbox) {
  let machine = playbox.querySelector(".machine .choice");

  addHistory(playbox);

  if (machine.classList.contains("selected"))
    machine.classList.remove("selected");
  resetResultChoiceBoxOfCss(machine);

  let userChoices = playbox.querySelector(".user");

  if (userChoices.classList.contains("selected"))
    userChoices.classList.remove("selected");

  userChoices.querySelectorAll(".choice").forEach((choiceElement) => {
    resetResultChoiceBoxOfCss(choiceElement);
  });
}

/*
 * @machine: 컴퓨터가 선택한 숫자값
 * @user: 사용자가 선택한 숫자값
 * @return: 0=>비김, 1=> 이김, 2=>짐
 */
function refree(machine, user) {
  return Math.abs(machine - user);
}

function resetResultChoiceBoxOfCss(element) {
  if (element.classList.contains("game-result-win"))
    element.classList.remove("game-result-win");
  if (element.classList.contains("game-result-draw"))
    element.classList.remove("game-result-draw");
  if (element.classList.contains("game-result-lose"))
    element.classList.remove("game-result-lose");

  return element;
}

function gameResultCssEventer(userElement, machineElement, result) {
  userElement.parentElement.querySelectorAll(".choice").forEach((node) => {
    resetResultChoiceBoxOfCss(node);
  });
  resetResultChoiceBoxOfCss(userElement);
  resetResultChoiceBoxOfCss(machineElement);
  machineElement.classList.add("selected");

  switch (result) {
    case 0:
      userElement.classList.add("game-result-draw");
      machineElement.classList.add("game-result-draw");
      break;
    case 1:
      userElement.classList.add("game-result-win");
      machineElement.classList.add("game-result-lose");
      break;
    case 2:
      userElement.classList.add("game-result-lose");
      machineElement.classList.add("game-result-win");
      break;
  }
}
