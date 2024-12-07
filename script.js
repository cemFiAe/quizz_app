let currentQuestionIndex = 0;

function init(){
    renderQuestion();
}

function renderQuestion() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    const question = questions[currentQuestionIndex];
    cardContainer.innerHTML = getCardTemplate(currentQuestionIndex);
}


function answer(selectedId) {
    const question = questions[currentQuestionIndex];
    const correctAnswerId = `answer_${question.right_answer}`;

    document.getElementById(correctAnswerId).classList.add("green");
    if (selectedId !== correctAnswerId) {
        document.getElementById(selectedId).classList.add("red");
    }

    const options = document.querySelectorAll('.question_body');
    options.forEach(option => option.onclick = null);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = `<h2>Quiz abgeschlossen! 🎉</h2>`;
    }
}
