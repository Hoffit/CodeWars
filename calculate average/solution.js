function find_average(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue)/array.length;
}