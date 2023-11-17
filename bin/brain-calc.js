#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { wrongAnswer } from '../src/index.js'

console.log('Welcome to the Brain Games!')

const goCalc = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log('What is the result of the expression?')

    console.log('Question: 4 + 10')
    const answer1 = readlineSync.question('Your answer: ')
    if (answer1 === '14') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer1, name, '14')
        return
    }

    console.log('Question: 25 - 11')
    const answer2 = readlineSync.question('Your answer: ')
    if (answer2 === '14') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer2, name, '14')
        return
    }

    console.log('Question: 25 * 7')
    const answer3 = readlineSync.question('Your answer: ')
    if (answer3 === '175') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer3, name, '175')
        return
    }

    console.log(`Congratulations, ${name}!`)
}

goCalc()
