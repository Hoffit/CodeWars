  function capitalize(s,arr) {
    arr.forEach((indexValue, loopIndex) => {
      s = s.substring(0, indexValue) + ((s[arr[loopIndex]]) ? s[arr[loopIndex]].toUpperCase() : '') +
        s.substring(indexValue+1, s.length);
    });
    return s;
  }