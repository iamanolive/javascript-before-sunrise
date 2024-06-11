function lastNRevert(text, n) {
    const string = text.slice(text.length - n);
    const stringArray = string.split("");
    const reverseArray = stringArray.reverse();
    const reverseString = reverseArray.join("");
    return reverseString;
}

export { lastNRevert };