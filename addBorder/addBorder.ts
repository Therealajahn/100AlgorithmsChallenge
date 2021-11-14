export function addBorder(picture: string[]): string[] {
  //add picture[0].length + number of *s to matrix beginning and end
  //add star to words beginning and end
  let borderPicture = [];
  for (const word of picture) {
    let split = word.split("");
    split.unshift("*");
    split.push("*");
    borderPicture.push(split.join(""));
  }
  let horizontal = [];
  for (let i = 0; i < picture[0].length + 2; i++) {
    horizontal.push("*");
  }
  borderPicture.unshift(horizontal.join(""));
  borderPicture.push(horizontal.join(""));

  return borderPicture;
}

console.log(addBorder(["abc", "ded"]));
