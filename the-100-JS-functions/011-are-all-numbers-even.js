function areAllNumbersEven(numbers) {
    const allEvenNumbers = numbers.every(number => number % 2 === 0);
    return allEvenNumbers;
}

export { areAllNumbersEven };