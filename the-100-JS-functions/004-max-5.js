function max5(nr1, nr2, nr3, nr4, nr5) {
    const numbers = [nr1, nr2, nr3, nr4, nr5];
    const result = numbers.sort((a, b) => b - a);
    return result[0];
}

export { max5 };