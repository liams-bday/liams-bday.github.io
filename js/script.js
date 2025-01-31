document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const replayButton = document.getElementById("replay");

    if (video && replayButton) {
        video.removeAttribute("controls");

        video.play().catch(() => {
            replayButton.textContent = "Play";
        });

        video.addEventListener("ended", function () {
            replayButton.textContent = "Play Again?";
        });

        replayButton.addEventListener("click", function () {
            video.currentTime = 0;
            video.play();
            replayButton.textContent = "Play Again?";
        });
    }
});

function checkAnswer(event, correctAnswer, nextPage) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        window.location.href = nextPage;  // Redirect to the next riddle page
    }
}
