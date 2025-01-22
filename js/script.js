function checkAnswer(event, correctAnswer, nextPage) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        window.location.href = nextPage;  // Redirect to the next riddle page
    }
}
