import readlineSync from 'readline-sync'

export const ATTEMPTS = 3

export const greeting = () => console.log('Welcome to the Brain Games!')

export const congratulations = (name) => console.log(`Congratulations, ${name}!`)

export const rightAnswer = () => console.log('Correct!')

export const getName = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
}

export const wrongAnswer = (answer, name, correct) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
    console.log(`Let's try again, ${name}!`)
}

export const createNumber = () => {
    return Math.floor(Math.random() * 100) + 1 // from 1 to 100
}

export const createNumbers = (length) => {
    const numbers = []

    for (let i = 0; i < length; i++) {
        numbers.push(createNumber())
    }

    return numbers
}

export const isEven = (num) => {
    return num % 2 === 0
}
