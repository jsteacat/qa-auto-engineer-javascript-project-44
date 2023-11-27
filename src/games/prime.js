import {
  checkAnswer,
  congratulations,
  createNumber,
  getName,
  greeting,
  isPrime,
} from '../index.js';

greeting();
const name = getName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export default () => {
  const number = createNumber();
  console.log(`Question: ${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  if (!checkAnswer(correctAnswer, name)) return;
  congratulations(name);
};
