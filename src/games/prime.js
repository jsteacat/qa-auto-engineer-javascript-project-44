import {
  ATTEMPTS,
  checkAnswer,
  congratulations,
  createNumber,
  getName,
  greeting,
  isPrime,
} from '../index.js';

export default () => {
  greeting();
  const name = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < ATTEMPTS; i += 1) {
    const number = createNumber();
    console.log(`Question: ${number}`);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (!checkAnswer(correctAnswer, name)) return;
    congratulations(name);
  }
};
