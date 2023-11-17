#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
    ATTEMPTS,
    congratulations, createNumbers,
    getName,
    greeting
} from '../src/index.js'

const goGCD = () => {
    greeting()
    const name = getName()
    console.log('Find the greatest common divisor of given numbers.')
    for(let i = 0; i < ATTEMPTS; i++) {
        const numbers = createNumbers(2)
        let correctAnswer = ''
    }
    congratulations(name)
}

goGCD()
