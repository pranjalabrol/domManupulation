// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];



let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submitButton");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.text;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
    });
}

function getSelectedOption() {
    const options = document.getElementsByName("option");
    for (const option of options) {
        if (option.checked) {
            return parseInt(option.value);
        }
    }
    return null;
}

function showResult(isCorrect) {
    alert(isCorrect ? "Correct!" : "Wrong!");
}

submitButton.addEventListener("click", () => {
    const selectedOption = getSelectedOption();
    if (selectedOption !== null) {
        const isCorrect = selectedOption === questions[currentQuestionIndex].correct;
        showResult(isCorrect);
    } else {
        alert("Please select an option.");
    }
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestionIndex = 0;
        loadQuestion();
    }
});

// Load the first question on startup
loadQuestion();
