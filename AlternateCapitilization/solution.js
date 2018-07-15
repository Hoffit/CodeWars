function capitalize(s){

    let oddUppers = s[0];
    let evenUppers = s[0].toUpperCase();

    for(let i=1; i<s.length;i++) {
      (i % 2) ? oddUppers+=s[i].toUpperCase() : evenUppers+= s[i].toUpperCase();
      (i % 2) ? evenUppers+= s[i] : oddUppers+=s[i];
    }
    return [evenUppers, oddUppers];
}