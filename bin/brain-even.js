#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')

const wrongAnswer = (answer, name, correct) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
    console.log(`Let's try again, ${name}!`)
}

const goEven = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log('Question: 15')
    const answer1 = readlineSync.question('Your answer: ')
    if (answer1 === 'no') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer1, name, 'no')
        return
    }

    console.log('Question: 6')
    const answer2 = readlineSync.question('Your answer: ')
    if (answer2 === 'yes') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer2, name, 'yes')
        return
    }

    console.log('Question: 7')
    const answer3 = readlineSync.question('Your answer: ')
    if (answer3 === 'no') {
        console.log('Correct!')
    } else {
        wrongAnswer(answer3, name, 'no')
        return
    }

    console.log(`Congratulations, ${name}!`)
}

goEven()
