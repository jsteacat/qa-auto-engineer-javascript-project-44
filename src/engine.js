import readlineSync from 'readline-sync';

const ATTEMPTS = 3;

const wrongAnswer = (answer, name, correct) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const checkAnswer = (correctAnswer, name) => {
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, name, correctAnswer);
  }
  return answer === correctAnswer;
};

export default (rule, getQuiz) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 0; i < ATTEMPTS; i += 1) {
    const { question, correctAnswer } = getQuiz();
    console.log(question);
    if (!checkAnswer(correctAnswer, name)) return;
  }

  console.log(`Congratulations, ${name}!`);
};
