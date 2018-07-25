  high = (x) => {
    const words = x.split(' ');
    let highIndex = 0;
    let highValue = 0;
    let currentValue = 0;
    words.forEach((aWord) => {
      currentValue = aWord.split('').reduce((accumulator, currentValue) => accumulator + currentValue.charCodeAt(0),0);
      if(currentValue > highValue) {
        highIndex = index;
        highValue = currentValue;
      }
    });
    console.log(words[highIndex]);
  };
  console.log(high('man i need a taxi up to ubud'));
  console.log(high('what time are we climbing up the volcano'));
  console.log(high('take me to semynak'));