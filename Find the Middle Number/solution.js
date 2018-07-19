var gimme = function (inputArray) {
  const tempSortedInputArray = inputArray.slice(0,3);
  tempSortedInputArray.sort(function sortNumber(a,b) {
    return a - b;
  });
  const middleValue = tempSortedInputArray[1];
  return inputArray.indexOf(middleValue);
};