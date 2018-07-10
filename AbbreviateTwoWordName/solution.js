function abbrevName(name) {


  let spaceIndex = name.indexOf(' ');


  let firstInitial = name.substring(0, 1);


  let secondInitial = name.substring(spaceIndex + 1, spaceIndex + 2);


  let rawInitials = `${firstInitial}.${secondInitial}`;


  return rawInitials.toUpperCase();


}