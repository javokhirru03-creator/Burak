// < ========== TASK L Start ========== >

function getReverse(a: string) {
  if(typeof a !== "string") {
    console.log("Please, insert a string")
  } else {
    const sorted = a.split(" ").map(word => word.split("").reverse().join(""));
    const result = sorted.join(" ");
    console.log(result);
  }
}

getReverse("string number array");

// < ========== TASK L End ========== >




// < ========== TASK K Start ========== >

// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for(const char of str) {
//     if(vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("stIring"));
// < ========== TASK K End ========== >



// < ========== TASK J Start ========== >

// const findLongestWord = (words: string) => {
//   const subWord = words.split(" ");
//   let longest = subWord[0];

//   for (const item of subWord) {
//     if (item.length > longest.length) {
//       longest = item;
//     }
//   }
//   return longest;
// };

// console.log(findLongestWord("I love learning JavaScript"));

// < ========== TASK J End ========== >

// < ========== TASK I Start ========== >

// function majorityElement(nums: number[]) {
//   interface N {
//     [key: number]: number;
//   }

//   const countMap: N = {};

//   for (const num of nums) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   let maxCount = 0;
//   let majority = nums[0];

//   for (const num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majority = Number(num);
//     }
//   }

//   return majority;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// < ========== TASK I End ========== >

// < ========== TASK H2 Start ========== >

// const getDigits = (str: string) => {
//   let digits: string = "";

//   for (const char of str){
//     if (!isNaN(Number(char))){
//       digits += char;
//     }
//   }
//   return digits;
// }

// console.log(getDigits("sch00ln1"));

// < ========== TASK H2 End ========== >

// < ========== TASK H Start ========== >

// function getPositive(arr: number[]): string {
//   return arr
//     .filter((num) => num > 0)
//     .map((num) => String(num))
//     .join("");
// }

// console.log(getPositive([5, -7, 2]));
// < ========== TASK H end ========== >

// < ========== TASK G start ========== >

// function getHighestIndex(arr: number[]) {
//   const maxValue = Math.max(...arr);
//   const index = arr.indexOf(maxValue);
//   return index;
// }

// console.log(getHighestIndex([4, 65, 23, 43, 765]));

// < ========== TASK G end ========== >
