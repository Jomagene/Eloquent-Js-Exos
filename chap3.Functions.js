// These are solutions to the Functions chapter exercises from the book Eloquent Javascript 4th version

// 1. MINIMUM

// Solution 1
function minimum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Solution 2 using ternary
function minimum(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

// ===============================================================

// 2. RECURSION

// Solution
function isEven(number) {
  number = Math.abs(number);
  if (number == 0) return "even";
  else if (number == 1) return "odd";
  else return isEven(number - 2);
}

// console.log(isEven(-1));

// ===============================================================

//3 BEAN COUNTING

// Solution
function countBs(string) {
  let countB = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") countB++;
  }
  return countB;
}

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) count++;
  }
  return count;
}

// Solution 2
function countChar(string, char) {
  return (string.match(new RegExp(char, "g")) || []).length;
}
