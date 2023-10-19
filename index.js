// ? Fibunacci Numbers
// function fibonacci(n) {
//   const fib = [0, 1];

//   for (let i = 2; i <= n; i++){
//     const nextFib = fib[i - 1] + fib[i - 2];
//     fib.push(nextFib);
//   }

//   return fib.slice(0, n + 1);
// }

// console.log(fibonacci(7));

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3 
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21
// 13 + 21 = 34
// 21 + 34 = 55
// 34 + 55 = 89
// 55 + 89 = 144
// 89 + 144 = 233
// 144 + 233 = 377
// 233 + 377 = 610


// ? Factorial of a number
// const factorial = (n) => {
//   let result = 1;

//   for (let i = 2; i <= n; i++){
//      result = result * i;
//   }
//   return result;

// }

// console.log(factorial(5))

// const factorial = (num) => {
//   let fact = 1;

//   for (let i = num; i >= 5; i++){
//     fact = fact * num;
//   }
//   return fact
// }

// console.log(factorial(5))

// ? Recurcive Fibunacci sequnce

const recursiveFibunacci = (num) => {
  if (num === 0 || num === 1) {
    return num;
  }

  const result = recursiveFibunacci(num - 1) + recursiveFibunacci(num - 2);

  return result;
}

// recursiveFibunacci(6);

console.log(recursiveFibunacci(20))