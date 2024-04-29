//arrow functions
//print Odd numbers using 
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbersList);

//Convert all the strings to title caps in a string array
const stringArray = ["aadhya", "good morning", "how are you?"];

const titleCapsArray = stringArray.map(str => {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
});

console.log("strings to title caps: ", titleCapsArray);

//Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Sum of all numbers: ", sum); // Output will be 15

//Return all the prime numbers in an array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
};

const findPrimes = arr => arr.filter(num => isPrime(num));

const primes = findPrimes(numbersArray);
console.log("Returning all the prime numbers: ", primes); // Output: [2, 3, 5, 7]

//Return all the palindromes in an array
const words = ["level", "hello", "radar", "world", "deified"];

const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const findPalindromes = arr => arr.filter(isPalindrome);
  
  const palindromes = findPalindromes(words);
  console.log("Returning all the palindromes", palindromes); // Output: ["level", "radar", "deified"]