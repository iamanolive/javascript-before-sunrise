function getBiggestNumberInArrays(numbers1, numbers2) {
    const array = [...numbers1, ...numbers2];
    const sortedArray = array.sort((num1, num2) => num2 - num1);
    return sortedArray[0];
}

export { getBiggestNumberInArrays };