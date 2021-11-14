export function allLongestStrings(inputArray: string[]): string[] {
  //PROBLEM: get the longest length of the strings in input,
  //return the strings that match that length in the same order as an array
  //inputArray: ["aba", "aa", "ad", "vcd", "aba"]
  //loop1(0-length){cur = input[i].length if(cur > acc)acc = cur}
  //acc 3 2 2 3 3
  //cur 3 3 3 3 3
  //loop2(0-length){if(input[i].length === acc){output.push(input[i])}}
  //output ["aba"] ["aba","vcd"] ["aba","vcd","aba"]
  let longestStringLength = 0;
  inputArray.forEach((string) => {
    longestStringLength =
      string.length > longestStringLength ? string.length : longestStringLength;
  });
  return inputArray.filter((string) => string.length === longestStringLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
//["aba", "vcd", "aba"]
console.log(allLongestStrings(["aa", "ad", "vcd", "aba"]));
//["vcd", "aba"]
