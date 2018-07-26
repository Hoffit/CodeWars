  function mutateMyStrings(stringOne, stringTwo) {
    let returnString = stringOne + '\n';
    stringOne.split('').forEach((aLetter, index) => {
      if(!(stringOne[index]===stringTwo[index])) {
        returnString += stringTwo.substring(0,index) + stringTwo[index] + stringOne.substring(index + 1,
          stringOne.length) + '\n';
      }
    });
    return returnString;
    }