export function adjacentElementsProduct(inputArray: number[]): number {
  //multiply all pairs of numbers that are next to each other,
  //return the biggest sum
  //for input loop 0-5{const cur = input[i] * input[i + 1] get the greatest}: [3, 6, -2, -5, 7, 3]
  //products will be: 18, -12, 10,-34, 21
  //comparison to get the greatest if(acc < cur)acc = cur: 18 18 18 18 21
  let greatestProduct = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    greatestProduct =
      currentProduct > greatestProduct ? currentProduct : greatestProduct;
  }
  return greatestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// 21
