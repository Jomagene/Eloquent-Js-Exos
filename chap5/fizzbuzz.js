function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    let result = '';
    if (i % 3 == 0) result += 'Fizz';
    if (i % 5 == 0) result += 'Bizz';
    console.log(result ? result : i);
  }
}

// fizzBuzz();
