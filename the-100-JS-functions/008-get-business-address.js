function getBusinessAddress(business) {
    const street = business.address.street;
    const number = `number ${business.address.number}`;
    const zipCode = business.address.zipCode;

    const returnAddress = `${street}, ${number}, ${zipCode}`;
    return returnAddress;
}

export { getBusinessAddress };