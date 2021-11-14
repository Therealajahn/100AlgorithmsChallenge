export function addTwoDigits(n: any): number {
  //PROBLEM: take input number, separate its digits, return the sum
  //convert input to string
  //separate string into "digits"
  const splitInput = n.toString(10).split("");
  //convert the "digits" into numbers
  //sum the digits together
  return parseInt(splitInput[0], 10) + parseInt(splitInput[1], 10);
}

console.log(addTwoDigits(29));
// 11
console.log(addTwoDigits(66));
// 12
console.log(addTwoDigits(22));
// 4
console.log(addTwoDigits(21));
//3
