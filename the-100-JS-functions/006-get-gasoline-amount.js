function getGasolineAmount(distance, consumptionPer100Km) {
    const totalDistance = distance * 2;
    const distanceIn100 = totalDistance / 100;
    const gasoline = distanceIn100 * consumptionPer100Km;
    return gasoline;
}

export { getGasolineAmount };