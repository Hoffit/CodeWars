function cubeOdd(arr) {

  if(!arr.every(x=>(typeof(x) === 'number'))) return undefined;
  let filteredArray = arr.filter((element) => (element % 2 === 1) || (element % 2 === -1));

  let cubedArray = filteredArray.map(x=>Math.pow(x,3));

  if(cubedArray.length ===0) return 0;
  
  return cubedArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}