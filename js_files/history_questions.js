// Get Elements
const js_question = document.getElementById('quest');
const choice_buttons = document.querySelectorAll('.choice'); // Selects all 4 buttons
let score = 0;

// History Questions
const questions = [
  {
    question: "Who was the first Emperor of the Roman Empire?",
    choices: ['Julius Caesar', 'Augustus', 'Nero', 'Marcus Aurelius'],
    answer: "Augustus"
  },
  {
    question: "In which year did the French Revolution begin?",
    choices: ['1776', '1789', '1804', '1812'],
    answer: "1789"
  },
  {
    question: "Which ancient civilization built the city of Machu Picchu?",
    choices: ['The Aztecs', 'The Mayans', 'The Incas', 'The Olmecs'],
    answer: "The Incas"
  },
  {
    question: "Who was the British Prime Minister during most of World War II?",
    choices: ['Neville Chamberlain', 'Clement Attlee', 'Winston Churchill', 'Anthony Eden'],
    answer: "Winston Churchill"
  },
  {
    question: "The signing of the Magna Carta in 1215 took place at which location?",
    choices: ['Runnymede', 'Westminster', 'Hastings', 'Canterbury'],
    answer: "Runnymede"
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

  choice_buttons.forEach((btn, index) => {
    btn.textContent = currentData.choices[index];

    btn.onclick = () => {

      if (btn.textContent === currentData.answer) {
        score++; // Increase score if correct
        console.log("Correct! Score: " + score);
      } else {
        console.log("Wrong! The answer was: " + currentData.answer);
      }

      currentNum++;

      if (currentNum < questions.length) {
        renderQuestion(); // Load the next question
      }
      else {
        if (score == 5) {
          perfectShowFinished();
        }
        else {
          withWrongShowFinished();
        }
      }
    };
  });
}

function perfectShowFinished() {

  button_generate = `<p>Good Job! Score: ${score}</p> <button onclick="location.reload();" style="width:100px; height:50px; border-radius: 10px; margin: 15px;">Try Again!</button> <button onclick="window.location.href='index.html';" style="width:100px; height:50px; border-radius: 10px; margin: 15px;">Exit!</button>`;

  js_question.innerHTML = `${button_generate}`;
  js_question.style.textAlign = "center";
  // Hide the buttons so the user can't click anymore
  document.querySelector('.choices').style.display = 'none';
}
function withWrongShowFinished() {

  button_generate = `<p>Nice Try! Score: ${score}</p> <button onclick="location.reload();" style="width:100px; height:50px; border-radius: 10px; margin: 15px;">Try Again!</button> <button onclick="window.location.href='index.html';" style="width:100px; height:50px; border-radius: 10px; margin: 15px;">Exit!</button>`;

  js_question.innerHTML = `${button_generate}`;
  js_question.style.textAlign = "center";
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