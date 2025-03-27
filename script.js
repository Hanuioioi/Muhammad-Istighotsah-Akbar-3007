function sayNumber(num) {
    let audio = new Audio(`sounds/${num}.mp3`);
    audio.play();
}

function generateQuiz() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    let num1 = parseInt(document.getElementById("num1").textContent);
    let num2 = parseInt(document.getElementById("num2").textContent);
    let answer = parseInt(document.getElementById("answer").value);
    let feedback = document.getElementById("feedback");

    if (answer === num1 + num2) {
        feedback.textContent = "Jawaban benar! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Coba lagi! ❌";
        feedback.style.color = "red";
    }
}

// Memulai quiz pertama kali
generateQuiz();
