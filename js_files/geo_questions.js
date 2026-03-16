// Get Elements
const js_question = document.getElementById('quest');
const choice_buttons = document.querySelectorAll('.choice'); // Selects all 4 buttons
let score = 0;

// Questions
const questions = [
  {
    question: "What is the capital of Canada?",
    choices: ['Beijing', 'Ottawa', 'Seoul', 'Manila'],
    answer: "Ottawa"
  },
  {
    question: "What is the capital of Denmark?",
    choices: ['Copenhagen', 'Oslo', 'Stockholm', 'Helsinki'],
    answer: "Copenhagen"
  },
  {
    question: "Which city is the largest not situated on a river, lake, or coastline?",
    choices: ['Johannesburg', 'Riyadh', 'Mexico City', 'Madrid'],
    answer: "Johannesburg"
  },
  {
    question: "What is the largest island in the world?",
    choices: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
    answer: "Greenland"
  },
  {
    question: `Which continent is known as the "Frozen Continent"?`,
    choices: ['Antarctica', 'Arctic', 'North America', 'Europe'],
    answer: "Antarctica"
  }
];

let currentNum = 0;

// Shuffle Questions to randomize
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// Render Question
function renderQuestion() {
  const currentData = questions[currentNum];
  js_question.textContent = currentData.question;

  const correct_answer = questions.answer
  console.log(correct_answer);

  choice_buttons.forEach((btn, index) => {
    btn.textContent = currentData.choices[index];

    btn.onclick = () => {
      currentNum++;

      if (currentNum < questions.length) {
        renderQuestion(); // Load the next question
      } else {
        showFinished(); // Handle the end of the game
      }
    };
  });
}

function showFinished() {
  js_question.textContent = `Quiz Complete! SCORE: ${score}`;
  // Hide the buttons so the user can't click anymore
  document.querySelector('.choices').style.display = 'none';
}

// Initialize the Game
function startGame() {
  shuffleQuestions(questions); // Randomize the questions
  currentNum = 0;              // Reset to start
  renderQuestion();            // Show the first question
}

// Automatically start when the page loads
window.onload = startGame;