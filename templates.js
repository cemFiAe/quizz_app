function getCardTemplate(index) {
    const question = questions[index];
    return /*html*/ `
        <div class="card quiz_card">
            <img src="./img/education.jpg" class="card-img-top" alt="Education">
            <div class="card-body">
                <h5 class="card-title">${question.question}</h5>
                <div id="answers-container">
                    ${[1, 2, 3, 4].map(i => `
                        <div class="card">
                            <div class="card-body question_body" id="answer_${i}" onclick="answer('answer_${i}')">
                                ${question[`answer_${i}`]}
                            </div>
                        </div>
                    `
                        )
                        .join("")
                        }
                </div>
                <div class="question_footer">
                    <span>Frage <b>${index + 1}</b> von <b>${questions.length}</b></span>
                    <button class="btn btn-primary" onclick="nextQuestion()">Nächste Frage</button>
                </div>
            </div>
        </div>
    `;
}