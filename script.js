let score = 0
let d = 88
let music = new Audio("music.mp3")
let widthMax=document.body.getBoundingClientRect().width
document.getElementById("button").addEventListener("click", () => {
    music.play()
    document.getElementById("dragon").style.animation = `dragonMove 3s linear infinite`
    checkGameOver()
    setInterval(() => {
        music.play()
    }, 150000);
})

function checkGameOver() {
    setInterval(() => {
        let dinoTop = document.getElementById("dino").getBoundingClientRect().top
        let dinoLeft = document.getElementById("dino").getBoundingClientRect().left+100
        let dinoWidth = document.getElementById("dino").getBoundingClientRect().width - 100
        let dinoHeight = document.getElementById("dino").getBoundingClientRect().height
        let dragonTop = document.getElementById("dragon").getBoundingClientRect().top + 50
        let dragonLeft = document.getElementById("dragon").getBoundingClientRect().left + 50
        let dragonWidth = document.getElementById("dragon").getBoundingClientRect().width
        if (
            (dragonLeft < dinoLeft + dinoWidth) &&
            (dragonLeft + dragonWidth > dinoLeft) &&
            (dinoTop > dragonTop - dinoHeight)
        ) {
            music.pause()
            if (confirm("Game Over, Scrore is " + score + "\n Do you want to play again?")) {
                d = 85
                score = 0
                music.play()
            }
            else {
                alert("Click on ok when you want to start the game.")
                d = 85
                score = 0
                music.play()
            }
        }
        else {
            score++
            document.getElementById("score").innerText = score
        }
    }, 1);
}

document.addEventListener("keyup", (event) => {
    let dinoL = document.getElementById("dino").getBoundingClientRect().left
    let dinoT = document.getElementById("dino").getBoundingClientRect().top
    if (event.key === "ArrowRight" && dinoL < 900) {
        document.getElementById("dino").style.left = ((dinoL + 10) / widthMax) * 100 + "vw"
    }
    else if (event.key === "ArrowLeft" && dinoL > 50) {
        document.getElementById("dino").style.left = ((dinoL - 10) / widthMax) * 100 + "vw"
    }
    else if (event.key === "ArrowUp" && dinoT > 400) {
        let jumpAudio = new Audio("jump.mp3")
        document.getElementById("dino").style.animation = 'jump 3s cubic-bezier(0.075, 0.82, 0.165, 1)'
        jumpAudio.play()
        setTimeout(() => {
            document.getElementById("dino").style.animation = ''
        }, 2500);
    }
})

let buttonMove = Array.from(document.getElementsByClassName("button"))
buttonMove.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        let dinoL = document.getElementById("dino").getBoundingClientRect().left
        let dinoT = document.getElementById("dino").getBoundingClientRect().top
        if (e.target.id === "right" && dinoL < 900) {
            document.getElementById("dino").style.left = ((dinoL + 10) / widthMax) * 100 + "vw"
        }
        else if (e.target.id === "left" && dinoL > 50) {
            document.getElementById("dino").style.left = ((dinoL - 10) / widthMax) * 100 + "vw"
        }
        else if (e.target.id === "jump" && dinoT > 200) {
            let jumpAudio = new Audio("jump.mp3")
            document.getElementById("dino").style.animation = 'jump 3s cubic-bezier(0.075, 0.82, 0.165, 1)'
            jumpAudio.play()
            setTimeout(() => {
                document.getElementById("dino").style.animation = ''
            }, 2500);
        }
    })
})