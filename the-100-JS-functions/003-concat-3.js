function concat3(string1, string2, string3, separator) {
    string1 = string1.concat(separator, string2, separator, string3);
    return string1;
}

export { concat3 };