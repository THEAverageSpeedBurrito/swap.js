'use strict';

function swap (array, index1, index2) {
  if(index1 === index2){
    return array;
  }
  let v1 = array[index1];
  array[index1] = array[index2];
  array[index2] = v1;

  return array;
}

var testArray = [1, 5, 14, 'this', '16', false];
var oddArray = [1, 2, 3, 4, 5, 6, 7];
console.log('Original Array: ', testArray);
console.log('Original Array: ', oddArray);

console.log('Swapping index 1 and 3: ', swap(testArray, 1, 3));

function reverse (arr) {
  let farIndex = arr.length - 1;
  for(let i = 0; i < arr.length/2; i++){
    swap(arr, i, length);
    farIndex--;
  }
  return arr;
}

console.log(reverse(testArray));
console.log(reverse(oddArray));
