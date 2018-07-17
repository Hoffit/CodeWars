function isNice(arr) {

  if(!arr || arr.length === 0) return false;

  let isNice = true;
  for(let i=0; i<arr.length && isNice; i++) {

    if(!(arr.includes(arr[i]-1) ||
      arr.includes(arr[i]+1))) {
        isNice = false;
      }
  }
  return isNice;
}