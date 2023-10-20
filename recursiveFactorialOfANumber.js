//  ? Recursive Factorial of a number
// ! Formular ---------------> n! = n * (n-1)!

const recursiveFactorialOfANumber = (n) => {
    if (n === 0) return 1 ;
    const result = n * recursiveFactorialOfANumber(n - 1);
    return result;
}

console.log(recursiveFactorialOfANumber(5));

// ? te Big O notation --------> is the n = O(n) Linear Time Complexity in the case of a recursive factorial of a number