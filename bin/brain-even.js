#!/usr/bin/env node
import {
  ATTEMPTS,
  checkAnswer,
  congratulations,
  createNumbers,
  getName,
  greeting,
  isEven,
} from '../src/index.js';

const goEven = () => {
  greeting();
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = createNumbers(ATTEMPTS);
  for (let i = 0; i < numbers.length; i + 1) {
    console.log('Question: ' + numbers[i]);
    const correctAnswer = isEven(numbers[i]) ? 'yes' : 'no';
    if (!checkAnswer(correctAnswer, name)) return;
  }

  congratulations(name);
};

goEven();
