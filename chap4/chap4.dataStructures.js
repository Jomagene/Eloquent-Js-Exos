// These are solutions to the data structure chapter  exercises from the book Eloquent Javascript 4th version

// 1. THE SUM OF A RANGE
// Solution 1

function range(start, end, step = 1) {
  let startToEnd = [];
  if (step < 0)
    for (let i = start; i >= end; i += step) {
      startToEnd.push(i);
    }
  else
    for (let i = start; i <= end; i += step) {
      startToEnd.push(i);
    }

  return startToEnd;
}

function sum(range) {
  let result = 0;
  for (let element of range) {
    result += element;
  }
  return result;
}

// Solution 2
function range(start, end, step = 1) {
  let startToEnd = [];
  let negative = step < 0;
  for (let i = start; negative ? i >= end : i <= end; i += step)
    startToEnd.push(i);

  return startToEnd;
}

function sum(range) {
  return range.reduce((prev, cur) => prev + cur);
}

// ===============================================================

// 2. REVERSING AN ARRAY
// Solution 1

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temporal = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temporal;
  }
  return array;
}

// ===============================================================

// 3. A LIST
// Solution 1
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list) {
    let { value, rest } = list;
    array.push(value);
    list = rest;
  }
  return array;
}

function prepend(element, list) {
  const newList = { value: element, rest: list };
  return newList;
}

function nth(list, num) {
  while (num > 0) {
    list = list?.rest;
    num--;
    if (!list) return undefined;
  }
  return list.value;
}

//Recursive version ofthe nth function
function nth(list, num) {
  if (!list) return undefined;
  else if (num == 0) return list.value;
  else return nth(list.rest, num - 1);
}

//Shorter solution
function nth(list, num) {
  return !list ? undefined : num == 0 ? list.value : nth(list.rest, --num);
}
console.log(nth(arrayToList([10, 20, 30]), 3));

// ===============================================================

// 3. DEEP COMPARISON
// Solution 1
