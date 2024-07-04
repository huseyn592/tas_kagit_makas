let oyun = document.querySelector("#oyun")
let evetBtn = document.querySelector(".evetBtn")
let hayirBtn= document.querySelector(".hayirBtn")
//^ oyun yeri
let youScore = document.querySelector(".youScore")
let winSkor = document.querySelector(".winSkor")
let loseSkor = document.querySelector(".loseSkor")
let robotScore = document.querySelector(".robotScore")
let benim = document.querySelector(".benim")
let robot = document.querySelector(".robot")
let tas = document.querySelector(".tas")
let kagit = document.querySelector(".kagit")
let makas = document.querySelector(".makas")




document.querySelector(".evetBtn").addEventListener("click", function () {
    document.getElementById("oyun").style.display = "none";
    document.getElementById("gameBasladi").style.display = "block";
  });
  
  document.querySelector(".hayirBtn").addEventListener("click", function () {
    alert("Oyunu oynamak istemediniz.");
  });
  
  const choices = ["tas", "kagit", "makas"];
  const youScoreSpan = document.querySelector(".youScore");
  const robotScoreSpan = document.querySelector(".robotScore");
  const winScoreSpan = document.querySelector(".winSkor");
  const loseScoreSpan = document.querySelector(".loseSkor");
  const winMessage = document.getElementById("winMessage");
  
  document.querySelectorAll(".button_game button").forEach(button => {
    button.addEventListener("click", function () {
      const yourChoice = this.className;
      const robotChoice = choices[Math.floor(Math.random() * choices.length)];
      document.querySelector(".benim").src = `./images/${yourChoice}.png`;
      document.querySelector(".robot").src = `./images/${robotChoice}.png`;
  
      if (yourChoice === robotChoice) {
       
      } else if (
        (yourChoice === "tas" && robotChoice === "makas") ||
        (yourChoice === "kagit" && robotChoice === "tas") ||
        (yourChoice === "makas" && robotChoice === "kagit")
      ) {
        youScoreSpan.textContent = +(youScoreSpan.textContent) + 1;
        winScoreSpan.textContent = `WIN:${+(winScoreSpan.textContent.split(":")[1]) + 1}`;
        if (parseInt(youScoreSpan.textContent) === 5) {
          showWinMessage();
        }
      } else {
        robotScoreSpan.textContent = +(robotScoreSpan.textContent) + 1;
        loseScoreSpan.textContent = `LOSE:${+(loseScoreSpan.textContent.split(":")[1]) + 1}`;
      }
    });
  });




  if (robotChoice===yourChoice ) {
       
  } else if (
    (yourChoice === "tas" && robotChoice === "makas") ||
    (yourChoice === "kagit" && robotChoice === "tas") ||
    (yourChoice === "makas" && robotChoice === "kagit")
  ) {
      robotScoreSpan.textContent = +(robotScoreSpan.textContent) + 1;
      loseScoreSpan.textContent = `LOSE:${+(loseScoreSpan.textContent.split(":")[1]) + 1}`;
      if (parseInt(youScoreSpan.textContent) === 5) {
          showWinMessage();
        }
        youScoreSpan.textContent = +(youScoreSpan.textContent) + 1;
        winScoreSpan.textContent = `WIN:${+(winScoreSpan.textContent.split(":")[1]) + 1}`;
  } else {
  }


  
  
  function showWinMessage() {
    winMessage.style.display = "block";
    setTimeout(() => {
      winMessage.style.display = "none";
      resetGame();
    }, 3000);
  }
  
  function resetGame() {
    youScoreSpan.textContent = 0;
    robotScoreSpan.textContent = 0;
    winScoreSpan.textContent = "WIN:0";
    loseScoreSpan.textContent = "LOSE:0";
    document.querySelector(".benim").src = "./images/tas.png";
    document.querySelector(".robot").src = "./images/tas.png";
  }
  