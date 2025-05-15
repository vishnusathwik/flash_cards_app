const image = document.getElementById('img')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const repeatButton = document.getElementById('repeat')
const questionContainerElement = document.getElementById('question-container')
const resultContainerElement = document.getElementById('result-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var a = document.getElementById('number001').innerText
var b = document.getElementById('score001').innerText
console.log(a)
console.log(b)
/*test*/
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
repeatButton.addEventListener('click',() => {
    location.reload()
})

function startGame() {
  startButton.classList.add('hide')
  image.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  a++
  document.getElementById('number001').innerText = a
  console.log(a)
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if(correct){
    b++
    document.getElementById('score001').innerText = b
    console.log(b)
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    clearStatusClass(document.body)
    repeatButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    resultContainerElement.classList.remove('hide')
    document.getElementById('number002').innerText = a
    document.getElementById('score002').innerText = b
    document.getElementById('score003').innerText = b
    document.getElementById('score004').innerText = 10 - b
    //startButton.innerText = 'Restart'
    //startButton.classList.remove('hide')
  }
}



function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'django framework is wriiten in',
    answers: [
      { text: 'python', correct: true },
      { text: 'C++', correct: false }
    ]
  },
  {
    question: 'HTML stands for',
    answers: [
      { text: 'Hyper text mark down language', correct: false },
      { text: 'hyper text markp language', correct: true }
    ]
  },
  {
    question: 'Use of Javascript',
    answers: [
      { text: 'beautify the content', correct: false },
      { text: 'make webpage dynamic', correct: true }
    ]
  },
  {
    question:'use of css in html',
    answers:[
      {text:'beautifies content',correct:true},
      {text:'no use',correct:false}
    ]
  },
  {
    question: 'capital of india',
    answers: [
      { text: 'hyderabad', correct: false },
      { text: 'Newdelhi', correct: true }
    ]
  },
  {
    question:'types of css?',
    answers:[
      {text:'3',correct:true},
      {text:'0',correct:false}
    ]
  },
  {
    question: '1HP=_ watts',
    answers: [
      { text: '1', correct: false },
      { text: '746', correct: true }
    ]
  },
  {
    question:'cut in voltage of silicon',
    answers:[
      {text:'0.7',correct:true},
      {text:'0.2',correct:false}
    ]
  },
  {
    question:'twin primes means',
    answers:[
          {text:'prime numbers differing by 2',correct:true},
          {text:'not a prime number',correct:false}
    ]
  }

]

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}