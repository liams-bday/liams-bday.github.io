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
    const cursorEffect = '<span class="cursor">></span>'; 

    let typingTimeout;
    let i = 0;

    function typeWriterEffect(text, element, speed) {
        clearTimeout(typingTimeout);
        element.innerHTML = ""; 
        i = 0;
    
        // Convert newlines to <br> for HTML rendering
        const formattedText = text.replace(/\n/g, "<br>");
    
        function type() {
            if (i < formattedText.length) {
                element.innerHTML = formattedText.substring(0, i + 1) + cursorEffect; 
                i++;
                typingTimeout = setTimeout(type, speed);
            } else {
                element.innerHTML = formattedText + cursorEffect;
            }
        }
    
        type();
    }
    

    if (video && replayButton) {
        video.removeAttribute("controls");

        video.play().catch(() => {
            replayButton.textContent = "Play";
            riddleText.innerHTML = "";
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
