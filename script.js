function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    return typeof value1 === typeof value2;
}
