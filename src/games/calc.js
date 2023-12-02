import gameEngine from '../engine.js';
import { createNumbers } from '../utils.js';

const getQuiz = () => {
  const numbers = createNumbers(2);
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const operationType = operations[randomIndex];

  let question;
  let correctAnswer;

  switch (operationType) {
    case '-':
      question = `Question: ${numbers[0]} - ${numbers[1]}`;
      correctAnswer = `${numbers[0] - numbers[1]}`;
      break;
    case '*':
      question = `Question: ${numbers[0]} * ${numbers[1]}`;
      correctAnswer = `${numbers[0] * numbers[1]}`;
      break;
    default:
      question = `Question: ${numbers[0]} + ${numbers[1]}`;
      correctAnswer = `${numbers[0] + numbers[1]}`;
      break;
  }

  return { question, correctAnswer };
};

export default () => {
  gameEngine('What is the result of the expression?', getQuiz);
};
