const arr = [17, 23, 31, 44, 59];

doubleNumber(arr);

console.log(doubleNumber(arr));


function doubleNumber(array) {
  return array.map(function(num) {
    return num * 2;
  });
}