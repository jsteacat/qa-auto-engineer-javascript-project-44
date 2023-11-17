#!/usr/bin/env node
import {
    ATTEMPTS,
    checkAnswer,
    congratulations,
    createNumbers,
    getName,
    greeting
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

        if (!checkAnswer(correctAnswer, name)) return false
    }

    congratulations(name)
}

goCalc()
