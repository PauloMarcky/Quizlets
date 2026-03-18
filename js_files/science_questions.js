// Get Elements
const js_question = document.getElementById('quest');
const choice_buttons = document.querySelectorAll('.choice'); // Selects all 4 buttons
let score = 0;

// Science Questions
const questions = [
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    answer: "Nitrogen"
  },
  {
    question: "Which organelle is known as the 'powerhouse' of the cell?",
    choices: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
    answer: "Mitochondria"
  },
  {
    question: "At what temperature does water freeze on the Celsius scale?",
    choices: ['0°C', '32°C', '-10°C', '100°C'],
    answer: "0°C"
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    choices: ['Fluorine', 'Iron', 'Francium', 'Lead'],
    answer: "Iron"
  },
  {
    question: "What is the name of the force that keeps planets in orbit around the Sun?",
    choices: ['Magnetism', 'Friction', 'Gravity', 'Inertia'],
    answer: "Gravity"
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