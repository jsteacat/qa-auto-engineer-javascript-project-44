import gameEngine from '../engine.js';
import { createProgression } from '../utils.js';

const getQuiz = () => {
  const progression = createProgression(10);
  const randomIndex = Math.floor(Math.random() * 10);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return { question, correctAnswer };
};

export default () => {
  gameEngine('What number is missing in the progression?', getQuiz);
};
