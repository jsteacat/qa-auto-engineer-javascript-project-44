import gameEngine from '../engine.js';
import {
  createNumber,
  isPrime,
} from '../utils.js';

const getQuiz = () => {
  const number = createNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', getQuiz);
};
