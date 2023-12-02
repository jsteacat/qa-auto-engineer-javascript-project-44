export const createNumber = () => Math.floor(Math.random() * 100) + 1;

export const createNumbers = (length) => {
  const numbers = [];

  for (let i = 0; i < length; i += 1) {
    numbers.push(createNumber());
  }

  return numbers;
};

export const createProgression = (length) => {
  const progression = [];
  const randomInteger = Math.floor(Math.random() * 10) + 2;
  for (let i = 1; i <= length; i += 1) {
    if (i === 1) {
      progression[i - 1] = i + randomInteger + randomInteger;
    } else {
      progression[i - 1] = progression[i - 2] + randomInteger;
    }
  }
  return progression;
};

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const GCD2 = (num1, num2) => {
  if (num2 > num1) return GCD2(num2, num1);
  if (!num2) return num1;
  return GCD2(num2, num1 % num2);
};
