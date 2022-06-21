//assigning elements
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const resultSpan = document.querySelector('.result-span');

//submit event triggered when user clicks '.btn'
form.addEventListener('submit', e => {
  e.preventDefault();

  //assigns user input to array
  let score = 0;
  const userAnswers = [
    form.q1.value, 
    form.q2.value, 
    form.q3.value, 
    form.q4.value
  ];
  
  //checking answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // makes score visible, disables buttons
  result.style.display = 'block';
  btn.disabled = true;

  if (btn.disabled) {
    btn.classList.remove('.btn');
    btn.classList.add('disabled-btn');
  }

  setTimeout(() => {
    window.scrollTo(0,0);
  }, 100)

  //score animation
  let output = 0;
  const timer = setInterval(() => {
    resultSpan.innerText = `${output}%`;
    if (output === score) {
      clearInterval();
    } else {
      output++;
    }
  }, 10)
});