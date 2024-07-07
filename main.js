let oyun = document.querySelector("#oyun")
let evetBtn = document.querySelector(".evetBtn")
let hayirBtn= document.querySelector(".hayirBtn")
//^ oyun yeri
let youScore = document.querySelector(".youScore")
let robotScore = document.querySelector(".robotScore")
let benim = document.querySelector(".benim")
let robot = document.querySelector(".robot")





evetBtn.addEventListener("click", function () {
    oyun.style.display = "none";
    gameBasladi.style.display = "block";
  });
  
hayirBtn.addEventListener("click", function () {
    window.close()
  });
  

  //^OYUN YERI


  let choices = ["tas", "kagit", "makas"];

   
  document.querySelectorAll(".button_game button").forEach(button => {
    button.addEventListener("click", function () {
      let yourChoice = this.className;
      let robotChoice = choices[Math.floor(Math.random() * choices.length)];
      benim.src = `./images/${yourChoice}.png`;
      robot.src = `./images/${robotChoice}.png`;
  
      if (yourChoice === robotChoice) {
       
      } else if (
        (yourChoice === "tas" && robotChoice === "makas") ||
        (yourChoice === "kagit" && robotChoice === "tas") ||
        (yourChoice === "makas" && robotChoice === "kagit")
      ) {
        youScore.textContent = +(youScore.textContent) + 1;
        winScore.textContent = `WIN:${+(winScore.textContent.join(":")[1]) + 1}`;
        if (+(youScore.textContent) === 5) {
         
        }
      } else {
        robotScore.textContent = +(robotScore.textContent) + 1;

      }
    });
  });
  
  
  function resetGame() {
    youScore.textContent = 0;
    robotScore.textContent = 0;

    benim.src = "./images/tas.png";
    robot.src = "./images/tas.png";
  }
  






































//   let oyun = document.querySelector("#oyun")
// let evetBtn = document.querySelector(".evetBtn")
// let hayirBtn= document.querySelector(".hayirBtn")
// //^ oyun yeri
// let youScore = document.querySelector(".youScore")
// let robotScore = document.querySelector(".robotScore")
// let benim = document.querySelector(".benim")
// let robot = document.querySelector(".robot")





// evetBtn.addEventListener("click", function () {
//     oyun.style.display = "none";
//     gameBasladi.style.display = "block";
//   });
  
// hayirBtn.addEventListener("click", function () {
//     window.close()
//   });
  
//   let choices = ["tas", "kagit", "makas"];
//   let youScoreSpan = document.querySelector(".youScore");
//   let robotScoreSpan = document.querySelector(".robotScore");
 
 
  
//   document.querySelectorAll(".button_game button").forEach(button => {
//     button.addEventListener("click", function () {
//       let yourChoice = this.className;
//       let robotChoice = choices[Math.floor(Math.random() * choices.length)];
//       benim.src = `./images/${yourChoice}.png`;
//       robot.src = `./images/${robotChoice}.png`;
  
//       if (yourChoice === robotChoice) {
       
//       } else if (
//         (yourChoice === "tas" && robotChoice === "makas") ||
//         (yourChoice === "kagit" && robotChoice === "tas") ||
//         (yourChoice === "makas" && robotChoice === "kagit")
//       ) {
//         youScoreSpan.textContent = +(youScoreSpan.textContent) + 1;
//         winScoreSpan.textContent = `WIN:${+(winScoreSpan.textContent.join(":")[1]) + 1}`;
//         if (+(youScoreSpan.textContent) === 5) {
         
//         }
//       } else {
//         robotScoreSpan.textContent = +(robotScoreSpan.textContent) + 1;

//       }
//     });
//   });
  
  
//   function resetGame() {
//     youScoreSpan.textContent = 0;
//     robotScoreSpan.textContent = 0;

//     benim.src = "./images/tas.png";
//     robot.src = "./images/tas.png";
//   }
  