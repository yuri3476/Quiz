const quizData = [
    {
        question: "Qual destes passwords foi o mais usado na internet?",
        a: "a1b2c3",
        b: "abcdef",
        c: "654321",
        d: "123456",
        correct: "d",
    },

    {
        question: "O que significa a sigla “www” na internet?",
        a: "World wide web",
        b: "Web world wide",
        c: "Web wide world",
        d: "World wide web",
        correct: "a",
    },

    {
        question: "Em média, quantas pesquisas totalmente novas são feitas no Google por dia?",
        a: "200 milhões",
        b: "450 milhões",
        c: "1 bilhão",
        d: "280 milhões",
        correct: "b",
    },

    {
        question: "Qual foi a primeira rede social da história da internet?",
        a: "Classmate",
        b: "MySpace",
        c: "Orkut",
        d: "MSN",
        correct: "a",
    },

    {
        question: "Quantos bits cabem em um byte?",
        a: "1 bit",
        b: "12 bits",
        c: "8 bits",
        d: "10 bits",
        correct: "c",
    },

    
];

const quiz = document.getElementById("quiz");
const answerElements =document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
                <h2>Você teve ${score}/${quizData.length} questões corretas!!</h2>
                <button onclick="history.go(0)">Jogar Novamente</button>
            `;
        }
    }
});