// 1. LOOPING A TRIANGLE

// Solution 1
/*let line = "";
for (let i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}*/

// Solution 2
/*for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}*/

// ===============================================================

// 2. FIZZBUZZ

// Solution 1
// let counter = 1;
// while (counter <= 100) {
//   if (counter % 3 == 0 && counter % 5 == 0) console.log("FizzBuzz");
//   else if (counter % 3 == 0) console.log("Fizz");
//   else if (counter % 5 == 0) console.log("Buzz");
//   else console.log(counter);
//   counter++;
// }

// Solution 2
// for (let counter = 1; counter <= 100; counter++) {
//   let result = "";
//   if (counter % 3 == 0) result += "Fizz";
//   if (counter % 5 == 0) result += "Buzz";
//   console.log(result ? result : counter);
// }

// ===============================================================

// 2. CHESSBOARD

// let chess = "";
// const SIZE = 10;
// for (let i = 0; i < SIZE; i++) {
//   for (let j = 0; j < SIZE; j++) {
//     if ((i + j) % 2 == 0) chess += "#";
//     else chess += " ";
//   }
//   chess += "\n";
// }

// console.log(chess);
