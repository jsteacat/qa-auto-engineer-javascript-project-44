#!/usr/bin/env node
import {
    ATTEMPTS,
    checkAnswer,
    congratulations,
    createNumbers,
    GCD2,
    getName,
    greeting
} from '../src/index.js'

const goGCD = () => {
    greeting()
    const name = getName()
    console.log('Find the greatest common divisor of given numbers.')
    for(let i = 0; i < ATTEMPTS; i++) {
        const numbers = createNumbers(2)
        let correctAnswer = `${GCD2(numbers[0], numbers[1])}`
        console.log(`Question: ${numbers[0]} ${numbers[1]}`)
        if (!checkAnswer(correctAnswer, name)) return false
    }
    congratulations(name)
}

goGCD()
