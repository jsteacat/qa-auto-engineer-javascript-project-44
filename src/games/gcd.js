import gameEngine from '../engine.js';
import {
  createNumbers,
  GCD2,
} from '../utils.js';

const getQuiz = () => {
  const numbers = createNumbers(2);
  const question = `Question: ${numbers[0]} ${numbers[1]}`;
  const correctAnswer = `${GCD2(numbers[0], numbers[1])}`;

  return { question, correctAnswer };
};

export default () => {
  gameEngine('Find the greatest common divisor of given numbers.', getQuiz);
};
