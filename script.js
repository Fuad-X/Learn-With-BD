function openLeftNavigationBar()
{
    document.getElementById("leftNav").style.width ="30%";
    document.getElementById("page").style.width ="70%";
    document.getElementById("page").style.marginLeft ="30%";
    document.getElementById("naviIcon").style.color = "rgb(241, 241, 241)";
}
function closeLeftNavigationBar()
{
    document.getElementById("leftNav").style.width ="0%";
    document.getElementById("page").style.width ="100%";
    document.getElementById("page").style.marginLeft ="0";
    document.getElementById("naviIcon").style.color = "black";
}

const quizData = [
    {
        question: "Audio_Alphabet(english)/A.mp3",

        a_img: "Alphabet(english)/A.jpg",
        a: "A",
        b_img: "Alphabet(english)/B.jpeg",
        b: "B",
        c_img: "Alphabet(english)/C.jpeg",
        c: "C",
        d_img: "Alphabet(english)/D.jpeg",
        d: "D",

        correct: "a",
    },
    {
        question: "Audio_Alphabet(english)/E.mp3",

        a_img: "Alphabet(english)/E.jpeg",
        a: "E",
        b_img: "Alphabet(english)/X.jpeg",
        b: "X",
        c_img: "Alphabet(english)/T.jpeg",
        c: "T",
        d_img: "Alphabet(english)/O.jpeg",
        d: "O",

        correct: "a",
    },
    {
        question: "Audio_Alphabet(english)/Y.mp3",

        a_img: "Alphabet(english)/A.jpg",
        a: "A",
        b_img: "Alphabet(english)/Z.jpeg",
        b: "Z",
        c_img: "Alphabet(english)/Y.jpeg",
        c: "Y",
        d_img: "Alphabet(english)/M.jpeg",
        d: "M",

        correct: "c",
    },
    {
        question: "Audio_Alphabet(english)/R.mp3",

        a_img: "Alphabet(english)/X.jpeg",
        a: "X",
        b_img: "Alphabet(english)/G.jpeg",
        b: "G",
        c_img: "Alphabet(english)/F.jpeg",
        c: "F",
        d_img: "Alphabet(english)/R.jpeg",
        d: "R",

        correct: "d",
    },
    {
        question: "Audio_Alphabet(english)/D.mp3",

        a_img: "Alphabet(english)/A.jpg",
        a: "A",
        b_img: "Alphabet(english)/B.jpeg",
        b: "B",
        c_img: "Alphabet(english)/C.jpeg",
        c: "C",
        d_img: "Alphabet(english)/D.jpeg",
        d: "D",

        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.src = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    document.getElementById('a_img').src = currentQuizData.a_img;
    document.getElementById('b_img').src = currentQuizData.b_img;
    document.getElementById('c_img').src = currentQuizData.c_img;
    document.getElementById('d_img').src = currentQuizData.d_img;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length)
        {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
                <div style="text-align:center;padding-top: 15%;color:#ff284f;float:right;background-color:white;margin-right: 10%;width:80%;border-radius: 10px;padding-bottom: 15%;">
                    <h1>You answered ${score}/${quizData.length} questions correctly</h1>
                    <button onclick="location.reload()">Reload</button>
                </div>
            `
        }
    }
})
