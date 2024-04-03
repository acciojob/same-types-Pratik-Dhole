function isSameType(value1, value2) {
  // If both values are NaN, return true
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }
  // Otherwise, compare the types of the two values
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
