// let randomNumber1 = Math.floor(Math.random()*6) + 1
// let randomNumber2 = Math.floor(Math.random()*6) + 1

// let randomImage1 = `images/dice${randomNumber1}.png`;
// let randomImage2 = `images/dice${randomNumber2}.png`;

// let img1 = document.querySelector(".img1");
// img1.setAttribute("src", randomImage1);

// let img2 = document.querySelector(".img2");
// img2.setAttribute("src", randomImage2);

// BUTTON

let button = document.querySelector("button");
button.addEventListener("click", function() {
    let randomNumber1 = Math.floor(Math.random()*6) + 1
    let randomNumber2 = Math.floor(Math.random()*6) + 1

    let randomImage1 = `images/dice${randomNumber1}.png`;
    let randomImage2 = `images/dice${randomNumber2}.png`;

    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", randomImage1);

    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", randomImage2);

    // DISPLAY

    let h1 = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        h1.textContent = "Player1 Wins";
    } else if (randomNumber2 > randomNumber1) {
        h1.textContent = "Player2 WIns";
    } else {
        h1.textContent = "Draw"
    }
})