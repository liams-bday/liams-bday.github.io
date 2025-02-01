document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const replayButton = document.getElementById("replay");
    const riddleText = document.getElementById("written_riddle");
    const riddleContent = `To get to your sweetie, relive the past
remember the tree and the shattering glass
the clues where the heart is, or used to be
but maybe don't bother the group of newbies
all I am saying (this point, I belabor)
sometimes it's nice to get help from a neighbor!`;

    let typingTimeout;
    let i = 0;

    function typeWriterEffect(text, element, speed) {
        clearTimeout(typingTimeout);
        element.textContent = ""; 
        i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text[i]; 
                i++;
                typingTimeout = setTimeout(type, speed);
            }
        }

        type();
    }

    if (video && replayButton) {
        video.removeAttribute("controls");

        video.play().catch(() => {
            replayButton.textContent = "Play";
            riddleText.textContent = "";
        });

        video.addEventListener("play", function () {
            typeWriterEffect(riddleContent, riddleText, 50);
        });

        video.addEventListener("ended", function () {
            replayButton.textContent = "Play Again?";
        });

        replayButton.addEventListener("click", function () {
            video.currentTime = 0;
            video.play();
            replayButton.textContent = "Play Again?";
            typeWriterEffect(riddleContent, riddleText, 50);
        });
    }
});

function checkAnswer(event, correctAnswer, nextPage) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        window.location.href = nextPage;
    }
}
