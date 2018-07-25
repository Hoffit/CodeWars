  high = (x) => {
    const words = x.split(' ');
    let highIndex = 0;
    let highValue = 0;
    let currentValue = 0;
    words.forEach((aWord, index) => {
      console.log(aWord);
      currentValue =
        aWord.split('').reduce((accumulator, currentValue) => accumulator + currentValue.charCodeAt(0)%96,0);
      console.log(currentValue);
      if(currentValue > highValue) {
        highIndex = index;
        highValue = currentValue;
      }
    });
    return words[highIndex];
  };