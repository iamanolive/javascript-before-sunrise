function everyNPositions(message, step) {
    let newString = "";
    for (let i = 0; i < message.length; i++)
        if (i % step === 0)
            newString += message[i];
    return newString;
}

export { everyNPositions };