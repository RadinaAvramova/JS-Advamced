function solve() {
  let correct = 0
  let inCorrect = 0

  const mapper = {
      'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
      'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
      'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
  }

  const questions = document.querySelectorAll('h2');
  let sectionEl = Array.from(document.querySelectorAll('section'));

  for (let i = 0; i < questions.length; i++) {
      let currentQuestion = questions[i].textContent
      let buttons = sectionEl[i].querySelectorAll('p');
      for (el of buttons) {
          el.addEventListener('click', clickAnswer)
      }

      function clickAnswer(e) {
          if (e.currentTarget.textContent === mapper[currentQuestion]) {
              correct += 1;
              if (i < 2) {
                  sectionEl[i].style.display = 'none';
                  sectionEl[i + 1].style.display = 'block';

              }
          } else {
              if (i < 2) {
                  sectionEl[i].style.display = 'none';
                  sectionEl[i + 1].style.display = 'block';
              }
          }

          if (i === 2) {
              if (correct === 3) {
                  let result = document.querySelectorAll('.results-inner')[0].children;
                  result[0].textContent = 'You are recognized as top JavaScript fan!';
                  sectionEl[i].style.display = 'none';
                  document.getElementById('results').style.display = 'block';
              } else {
                  let result = document.querySelectorAll('.results-inner')[0].children;
                  result[0].textContent = `You have ${correct} right answers`;
                  sectionEl[i].style.display = 'none';
                  document.getElementById('results').style.display = 'block';
              }
          }
      }
  }
}

function solve() {

  let points = 0;
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let index = 0;
  let question = document.getElementsByTagName('section');

  Array.from(document.querySelectorAll('.quiz-answer'))
      .map((x) => x.addEventListener('click', (answer) => {
          if (correctAnswers.includes(answer.target.innerHTML)) {
              points++;
          };
          question[index].style.display = 'none';
          index++;

          index !== 3
              ? question[index].style.display = 'block'
              : printResult(points);
      }));
  function printResult(points) {
      document.querySelector("#results").style.display = 'block';
      let text = '';
      points === 3
          ? text = 'You are recognized as top JavaScript fan!'
          : text = `You have ${points} right answers`;
      document.querySelector("#results > li > h1").textContent = text;
  }
}

function solve() {
  let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let rightAnswered = 0;
  let index = 0;

  Array
    .from(document.querySelectorAll(".answer-text"))
    .map((x) => x.addEventListener("click", function nextSection(e) {

      if (correctAnswers.includes(e.target.innerHTML)) {
        rightAnswered++;
      }

      let currSection = document.querySelectorAll("section")[index];
      currSection.style.display = "none";

      if (document.querySelectorAll("section")[index + 1] !== undefined) {
        let nextSection = document.querySelectorAll("section")[index + 1];
        nextSection.style.display = "block";
        index++;
      } else {
        document.querySelector("#results").style.display = "block";
        if (rightAnswered !== 3) {
          document.querySelector("#results h1").innerHTML = `You have ${rightAnswered} right answers`;
        } else {
          document.querySelector("#results h1").innerHTML = "You are recognized as top JavaScript fan!";
        }
      }
    }));
}
