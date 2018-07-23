function cubeOdd(arr) {

  console.log(arr);
  if(!arr.every(x=>(typeof(x) === 'number'))) return undefined;
  let filteredArray = arr.filter((element) => (element % 2 === 1) || (element % 2 === -1));
  console.log(filteredArray);

  let cubedArray = filteredArray.map(x=>x**3);
  console.log(cubedArray);

  if(cubedArray.length ===0) return 0;
  return cubedArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}