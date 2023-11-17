import readlineSync from 'readline-sync'

export const ATTEMPTS = 3

export const greeting = () => console.log('Welcome to the Brain Games!')

export const congratulations = (name) => console.log(`Congratulations, ${name}!`)

export const getName = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
}

const wrongAnswer = (answer, name, correct) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
    console.log(`Let's try again, ${name}!`)
}

export const checkAnswer = (correctAnswer, name) => {
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswer) {
        console.log('Correct!')
    } else {
        wrongAnswer(answer, name, correctAnswer)
    }
    return answer === correctAnswer
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

export const isPrime = (num) => {
    const sqrt = Math.sqrt(num)
    for(let i = 2; i <= sqrt; i++) {
        if(num % i === 0) return false
    }
    return num > 1
}

export const GCD2 = (num1, num2) => {
    if (num2 > num1) return GCD2(num2, num1);
    if (!num2) return num1;
    return GCD2(num2, num1 % num2);
}
