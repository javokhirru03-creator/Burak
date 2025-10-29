// MIT TASK G

/* function getHighestIndex(arr: number[]): number {
  let max: number = arr[0];
  let index: number = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

console.log(getHighestIndex([32, 100, 5, 21, 12, 21, 8, 9]));
 */

// MIT TASK H

/* function getPositive(arr: number[]): string {

  return arr

  .filter(function(num) {
  return num > 0;
 }) .join("")
}

const result = getPositive([1, -1, 8, 3, 92, 0, -5]);
console.log(result);     
console.log(typeof result);  */

// MIT TASK H2
/* 
function getDigits(str: string): string {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= '0' && char <= '9') { 
      result += char;
    }
  }
  return result;
}

console.log(getDigits("m14i1t")); */

/* PROJECT STANDARDS:
-Logging standards                                   goHome
-Naming standards                                    MemberService
     function, method, vaiables => CAMEL
     class => PASCAL
     folder, file => KEBAB
     css => SNAKE                                    button_style
*/

/** 
 Traditioanl Api
 Rest Api
 GraphQL Api
*/

// MIT TASK I

/* function majorityElement(arr: number[]): number {
  let result = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count > max) {
      max = count;
      result = arr[i];
    }
  }

  return result;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));  */

// MIT TASK J

/* function findLongestWord(str: string): string {
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("I came from Uzbekistan!")); */

// MIT TASK I

/* function countVowels(str: string): number {
  let vowels = "aeiouAEIOU"; 
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("string"));  */

// MIT TASK L

// function reverseSentence(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("! I love TypeScript"));

// MIT TASK M
