function getLongestString(arrayOfStrings) {
    let longestString = "";
    for (let i = 0; i < arrayOfStrings.length; i++)
        if (arrayOfStrings[i].length > longestString.length)
            longestString = arrayOfStrings[i];
    return longestString;
}

export { getLongestString };