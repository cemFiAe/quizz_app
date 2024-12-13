let currentQuestionIndex = 0;

let rightAnswersSum = 0;


let AUDIO_SUCCESS = new Audio('/audio/success.mp3');
let AUDIO_WRONG = new Audio('/audio/wrong.mp3')
let AUDO_FINISH = new Audio('audio/finish.mp3');

function init(){
    renderQuestion();
}

function renderQuestion() {
    let percent = ((currentQuestionIndex + 1) / questions.length) * 100;

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    const question = questions[currentQuestionIndex];
    cardContainer.innerHTML = getCardTemplate(currentQuestionIndex, percent);
    document.getElementById('progress-bar').innerHTML = percent + '%'
}


function answer(selectedId) {
    const question = questions[currentQuestionIndex];
    const correctAnswerId = `answer_${question.right_answer}`;

    document.getElementById(correctAnswerId).classList.add("green");
    if (selectedId !== correctAnswerId) {
        AUDIO_WRONG.play();
        document.getElementById(selectedId).classList.add("red");
    }

    const options = document.querySelectorAll('.question_body');
    options.forEach(option => option.onclick = null);

    if(selectedId === correctAnswerId){
        AUDIO_SUCCESS.play();
        rightAnswersSum++
    }

}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        const cardContainer = document.getElementById('card-body');
        AUDO_FINISH.play();
        cardContainer.innerHTML = /*html*/`
        <div class="endQuiz">
            <h2>Quiz abgeschlossen! 🎉</h2>
            <div class="endQuiz_footer">
                Du hast <b>${rightAnswersSum}</b> von <b>${questions.length}</b> Fragen richtig beantwortet!
            </div>
            <div class="endQuiz_button">
                    <button class="btn btn-primary" onclick="restartGame()">Erneut spielen</button>
                </div>
        </div>
        `;

        document.getElementById('card-img-top').src = './img/trophy.png'
    }
}

function restartGame(){
    currentQuestionIndex = 0;
    rightAnswersSum = 0;
    renderQuestion();
}
