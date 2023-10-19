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