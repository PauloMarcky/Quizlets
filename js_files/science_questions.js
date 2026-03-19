const js_quest = document.getElementById("quest");
const js_choices = document.getElementsByClassName("choice");

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

let question_index = 0;
let score = 0;

function shuffle_questions_array(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function rendering_questions(questions) {
  let currentData = questions[question_index]
  js_quest.textContent = currentData.question;

  Array.from(js_choices).forEach((choice_btn, index) => {
    choice_btn.textContent = currentData.choices[index];

    choice_btn.onclick = () => {
      if (choice_btn.textContent == currentData.answer) {
        score++;
        console.log(score);
      }

      question_index++;

      if (question_index < questions.length) {
        rendering_questions(questions);
      }
      else {
        if (score == 5) {
          perfect_ending_result();
        }
        else {
          with_wrong_ending_result();
        }
      }
    }
  })
}


function with_wrong_ending_result() {
  button_generate = `
  <div class="ending_container">
    <p>Nice Try! Score: ${score}</p> 
    <div class="end_btn_container">
      <button onclick="location.reload();" class="try_btn">
        Try Again!
      </button>
      <button onclick="window.location.href='index.html';" class="exit_btn">
        Exit!
      </button>
    </div>
  </div>`;

  js_quest.innerHTML = `${button_generate}`;
  js_quest.style.textAlign = "center";
  document.querySelector('.choices').style.display = 'none';

}

function perfect_ending_result() {
  button_generate = `<div class="ending_container">
    <p>Good Job! Score: ${score}</p> 
    <div class="end_btn_container">
      <button onclick="location.reload();" class="try_btn">
        Try Again!
      </button>
      <button onclick="window.location.href='index.html';" class="exit_btn">
        Exit!
      </button>
    </div>
  </div>`;

  js_quest.innerHTML = `${button_generate}`;
  js_quest.style.textAlign = "center";
  document.querySelector('.choices').style.display = 'none';

}

function StartGame() {
  shuffle_questions_array(questions);
  rendering_questions(questions);
}

window.onload = StartGame;