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


evetBtn.addEventListener("click" ,function(){
oyun.style.display = "none"
gameBasladi.style.display = "block"

})



hayirBtn.addEventListener("click" ,function(){
   window.close()
    
    
    })





    let myScore = 0
    let robScore = 0
let kazandi = 0
let kaybetti = 0


function randomSelector() {
    let random = ["tas","kagit","makas"]
    let ranSelect = Math.floor(Math.random() *3)
robot.setAttribute("src",`./images/${random[ranSelect]}.png`)
    return random[ranSelect]
}


function tasBtn() {
    benim.setAttribute("src", "./images/tas.png")
    randomSelector()
}


function kagitBtn() {
    benim.setAttribute("src", "./images/kagit.png")
    randomSelector()
}


function makasBtn() {
    benim.setAttribute("src", "./images/makas.png")
    randomSelector()
}





tas.addEventListener("click",function(){
    return tasBtn()
})


kagit.addEventListener("click",function(){
    return kagitBtn()
})

makas.addEventListener("click",function(){
    return makasBtn()
})

