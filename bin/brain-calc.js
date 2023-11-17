#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
    ATTEMPTS,
    congratulations,
    createNumbers,
    getName,
    greeting, rightAnswer,
    wrongAnswer
} from '../src/index.js'

const getOperationType = () => {
    const operations = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * (2 + 1))
    return operations[randomIndex]
}

const goCalc = () => {
    greeting()
    const name = getName()
    console.log('What is the result of the expression?')
    for(let i = 0; i < ATTEMPTS; i++) {
        const numbers = createNumbers(2)
        const operationType = getOperationType()
        let correctAnswer = ''
        switch(operationType) {
            case '+':
                console.log(`Question: ${numbers[0]} + ${numbers[1]}`)
                correctAnswer = `${numbers[0] + numbers[1]}`
                break
            case '-':
                console.log(`Question: ${numbers[0]} - ${numbers[1]}`)
                correctAnswer = `${numbers[0] - numbers[1]}`
                break
            case '*':
                console.log(`Question: ${numbers[0]} * ${numbers[1]}`)
                correctAnswer = `${numbers[0] * numbers[1]}`
                break
        }

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

goCalc()
