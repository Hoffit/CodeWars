function isNice(arr) {

  if(!arr || !arr.length) return false;

  for(let i=0; i<arr.length && isNice; i++) {

    if(!(arr.includes(arr[i]-1) ||
      arr.includes(arr[i]+1))) {
        return false;
      }
  }
  return true
}