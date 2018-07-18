function insertDash(num) {
  let oddDashedString = '';
  for(var i=0;i<num.toString().length-1;i++) {
    if(!((num.toString()[i]*num.toString()[i+1])%2)) {
      oddDashedString+=num.toString()[i];
    }
    else {
      oddDashedString+=num.toString()[i];
      oddDashedString+='-';
    }
  }
  return oddDashedString+=num.toString()[num.toString().length-1];
}