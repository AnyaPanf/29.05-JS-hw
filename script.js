
// The goal of this kata is two-fold:

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number 
// of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible 
// by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
// For the sake of this kata, you can assume all input will be a positive integer.
// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced 
// numbers (fizzbuzz) as strings.


const fibsFizzBuzz = (num) => {
    let fibs = [1, 1]
    for (let i = 2; i < num; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2]
    }
    let fibs2 = fibs.slice(0, num)
    for (let i = 0; i < fibs2.length; i++) {
        if (fibs2[i] % 3 === 0 && fibs2[i] % 5 === 0) {
            fibs2[i] = 'FizzBuzz'
        } else if (fibs2[i] % 3 === 0) {
            fibs2[i] = 'Fizz'
        } else if (fibs2[i] % 5 === 0) {
            fibs2[i] = 'Buzz'
        }
    }
    return fibs2
}
console.log(fibsFizzBuzz(20));