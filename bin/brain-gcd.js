#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
    congratulations,
    getName,
    greeting,
    wrongAnswer
} from '../src/index.js'

const goGCD = () => {
    greeting()
    const name = getName()
    console.log('Find the greatest common divisor of given numbers.')
    //
    congratulations(name)
}

goGCD()
