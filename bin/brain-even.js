#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
    ATTEMPTS,
    congratulations,
    createNumbers,
    getName,
    greeting,
    isEven,
    rightAnswer,
    wrongAnswer
} from '../src/index.js'

const goEven = () => {
    greeting()
    const name = getName()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const numbers = createNumbers(ATTEMPTS)
    for(let i = 0; i < numbers.length; i++) {
        console.log(`Question: ${numbers[i]}`)
        const correctAnswer = isEven(numbers[i]) ? 'yes' : 'no'
        const answer = readlineSync.question('Your answer: ')
        if (answer === correctAnswer) {
            rightAnswer()
        } else {
            wrongAnswer(answer, name, correctAnswer)
            return false
        }
    }

    congratulations(name)
}

goEven()
