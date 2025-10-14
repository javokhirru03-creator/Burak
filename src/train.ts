// function getHighestIndex(arr: number[]): number {
//   let max: number = arr[0];
//   let index: number = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }

//   return index;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));

//..................................................Tack - H ..............................//
// function getPositive(arr: number[]): string {
//   return arr.filter((num) => num > 0).join("");
// }

// console.log(getPositive([1, -4, 2]));
// console.log(typeof getPositive([1, -4, 2]));

//..................................................Tack - H2 ..............................//
function getDigits(str: string): string {
  let result = "";
  for (let a of str) {
    if (a >= "0" && a <= "9") {
      result += a;
    }
  }
  return result;
}

console.log(getDigits("m14i1t"));
