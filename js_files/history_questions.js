const js_quest = document.getElementById("quest");
const js_choices = document.getElementsByClassName("choice");

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