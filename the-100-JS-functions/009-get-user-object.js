function getUserObject(firstName, lastName, age) {
    const person = {
        age: age,
        name: `${firstName} ${lastName}`
    }; return person;
}

export { getUserObject };