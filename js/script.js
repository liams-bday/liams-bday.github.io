function checkAnswer(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = 'shadow';
    const feedback = document.getElementById('feedback');

    // Clear any existing feedback
    if (!feedback) {
        const newFeedback = document.createElement('p');
        newFeedback.id = 'feedback';
        document.querySelector('.card').appendChild(newFeedback);
    }

    // Check the answer
    if (userAnswer === correctAnswer) {
        window.location.href = 'pac.html';
    } else {
        feedback.style.display = 'block';
        feedback.textContent = 'Incorrect answer. Try again!';
    }
}
