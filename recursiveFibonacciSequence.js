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




// ?Fn = Fn - 1 + Fn - 2
// ?F5 = F5 - 1 + F5 - 2
// ?F5 = 4 + 3

const recusiveFubunachiNumbers = (n) => {
    if (n < 2) {
        return n
    };
    const result = recusiveFubunachiNumbers(n - 1) + recusiveFubunachiNumbers(n - 2);
    return result;
}

console.log(recusiveFubunachiNumbers(7));