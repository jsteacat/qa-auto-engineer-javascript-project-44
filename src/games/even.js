import gameEngine from '../engine.js';
import {
  createNumber,
  isEven,
} from '../utils.js';

const getQuiz = () => {
  const number = createNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".', getQuiz);
};
