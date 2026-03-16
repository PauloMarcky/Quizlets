const js_quest = document.getElementById("quest");
const js_choices = document.getElementsByClassName("choice");

const questions = [
  {
    question: "What does 'HTTP' stand for?",
    choices: ['HyperText Transfer Protocol', 'High Tech Transfer Process', 'Hyperlink Text Tool Package', 'Home Tool Transfer Protocol'],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Which data structure follows the 'First In, First Out' (FIFO) principle?",
    choices: ['Stack', 'Queue', 'Binary Tree', 'Hash Map'],
    answer: "Queue"
  },
  {
    question: "In programming, what is a 'Boolean'?",
    choices: ['A type of loop', 'A decimal number', 'A value that is either true or false', 'A way to style text'],
    answer: "A value that is either true or false"
  },
  {
    question: "Which of these is NOT a high-level programming language?",
    choices: ['Python', 'Java', 'Assembly', 'C++'],
    answer: "Assembly"
  },
  {
    question: "What is the primary purpose of an Operating System?",
    choices: ['To browse the internet', 'To manage hardware and software resources', 'To write code', 'To protect against all viruses'],
    answer: "To manage hardware and software resources"
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
        js_quest.textContent = `Quiz Complete! SCORE: ${score}`;
        js_quest.style.textAlign = "center";
        document.querySelector('.choices').style.display = 'none';
      }


    }
  })
}

function StartGame() {
  shuffle_questions_array(questions);
  rendering_questions(questions);
}

window.onload = StartGame;