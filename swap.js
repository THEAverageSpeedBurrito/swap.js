'use strict';

function swap (array, index1, index2) {
  if(index1 === index2){
    return array;
  }
  let v1 = array[index1];
  array[index1] = array[index2];
  array[index2] = v1;

  console.log(`Swapping ${v1} & ${array[index1]}`);
  return array;
}

var testArray = [1, 5, 14, 'this', '16', false];
console.log('Original Array: ', testArray);

console.log(swap(testArray, 1, 3));
console.log(swap(testArray, 4, 1));
console.log(swap(testArray, 2, 4));
