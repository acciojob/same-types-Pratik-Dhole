const isSameType = (value1, value2) => {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Check if both values are of the same type
    return typeof value1 === typeof value2;
};

describe('isSameType function', () => {
    it('should return true if values are of the same type or both NaN', () => {
        const value1 = NaN;
        const value2 = 123;
        expect(isSameType(value1, value2)).to.be.false;
    });
});


let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
