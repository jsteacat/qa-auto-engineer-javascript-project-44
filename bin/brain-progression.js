#!/usr/bin/env node

import {
    ATTEMPTS,
    checkAnswer,
    congratulations,
    getName,
    greeting
} from '../src/index.js'

const getProgression = (length) => {
    const progression = []
    const randomInteger = Math.floor(Math.random() * 10) + 2
    for(let i = 1; i <= length; i++) {
        if (i === 1) {
            progression[i - 1] = i + randomInteger + randomInteger
        } else {
            progression[i - 1] = progression[i - 2] + randomInteger
        }
    }
    return progression
}

const goProgression = () => {
    greeting()
    const name = getName()
    console.log('What number is missing in the progression?')

    for(let i = 0; i < ATTEMPTS; i++) {
        const progression = getProgression(10)
        const randomIndex = Math.floor(Math.random() * 10)
        const correctAnswer = `${progression[randomIndex]}`
        progression[randomIndex] = '..'
        console.log(`Question: ${progression.join(' ')}`)
        if (!checkAnswer(correctAnswer, name)) return false
    }

    congratulations(name)
}

goProgression()
