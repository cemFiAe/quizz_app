function getCardTemplate(index, percent) {
    const question = questions[index];
    return /*html*/ `
        <div class="card quiz_card">
            <img src="./img/education.jpg" class="card-img-top" id="card-img-top" alt="Education">
            
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" id="progress-bar" style="width: ${percent}%">${percent}%</div>
            </div>
            
            <div class="card-body" id="card-body">
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