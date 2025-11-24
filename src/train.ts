// < ========== TASK W start ========== >

function chunkArray(arr: number[], size: number): number[][] {
  let newArr = [];
  for(let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArr.push(chunk);
  }
  return newArr;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 4)); 

// < ========== TASK W end ========== >






// < ========== TASK V start ========== >
function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

// console.log(countChars("hello")); 


// better vs
function countCharss(str: string){
  let obj = new Map<string, number>();
  for (const char of str) {
        if (obj.has(char)) {
            obj.set(char, obj.get(char)! + 1);
        } else {
            obj.set(char, 1);
        }
    }
    return obj;
}

// console.log(countCharss("hello")); 

// < ========== TASK V end ========== >






// < ========== TASK U start ========== >

function sumOdds(num: number): number {
  let sum = 0;
  for(let i = 0; i < num; i++) {
    let z = i % 2
    if(z === 1) {
      sum ++;
    }
  }
  return sum;
}

// console.log(sumOdds(9)); 

// < ========== TASK U end ========== >





// < ========== TASK T start ========== >

function mergeSortedArrays(a: number[], b: number[]): number[]{
  const combinedArr = [...a, ...b];
  const sortedArr = combinedArr.sort((x, y) => {return x - y});
  return sortedArr;
}

// console.log(mergeSortedArrays([9, 12, 34], [ 3, 6, 7]));

//better vs:
function mergeSortedArrayssssss(a: number[], b: number[]): number[] {
  return [...a, ...b].sort((x, y) => x - y);
}

// console.log(mergeSortedArrayssssss([3, 2, 0, 1, 45], [ 5, 4, 37, 25])); 
// console.log(mergeSortedArrayssssss([9, 12, 34], [ 3, 6, 7]));

// < ========== TASK T end ========== >




// < ========== TASK S start ========== >

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// console.log(missingNumber([3, 2, 0, 1, 5, 4, 7])); 

// < ========== TASK S end ========== >





// < ========== TASK P start ========== >

function calculate(numStr: string) {
  const [a, b] = numStr.split('+').map(ele => Number(ele));
  return a + b;
}

// console.log(calculate("4+7"));

// < ========== TASK P end ========== >






// < ========== TASK P start ========== >

function hasProperty(obj: object, str: string){
  const keys = Object.keys(obj);
  return keys.includes(str);
}

// console.log(hasProperty({name: "BMW", model: "M3"}, "key"));

// < ========== TASK P end ========== >




// < ========== TASK P start ========== >

function objectToArray<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  const result: [keyof T, T[keyof T]][] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}

// console.log(objectToArray({ a: 10, b: 20 }));

// < ========== TASK P end ========== >



// < ========== TASK O start ========== >

function calculateSumOfNumbers(arr: any) {
  return arr.reduce((sum: number, item: any) => {
    if (typeof item === "number"  && !isNaN(item)) {
      return sum + item;
    }
    return sum;
  }, 0);
}

// console.log(calculateSumOfNumbers([10, NaN, "10", {son: 10}, true, 35]));

// < ========== TASK O end ========== >



// < ========== TASK N start ========== >

const palindromCheck = (a: string) => {
  const reversedA = a.split("").reverse().join("");
  return reversedA === a;
}

// console.log(palindromCheck("dad"));
// < ========== TASK N start ========== >





// < ========== TASK M start ========== >

function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
  return numbers.map(num => ({
    number: num,
    square: num * num
  }));
}

// console.log(getSquareNumbers([1, 2, 3]));

// < ========== TASK M End ========== >




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

// getReverse("string number array");

// < ========== TASK L End ========== >




// < ========== TASK K Start ========== >

function countVowels(str: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for(const char of str) {
    if(vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// console.log(countVowels("stIring"));
// < ========== TASK K End ========== >



// < ========== TASK J Start ========== >

const findLongestWord = (words: string) => {
  const subWord = words.split(" ");
  let longest = subWord[0];

  for (const item of subWord) {
    if (item.length > longest.length) {
      longest = item;
    }
  }
  return longest;
};

// console.log(findLongestWord("I love learning JavaScript"));

// < ========== TASK J End ========== >

// < ========== TASK I Start ========== >

function majorityElement(nums: number[]) {
  interface N {
    [key: number]: number;
  }

  const countMap: N = {};

  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let maxCount = 0;
  let majority = nums[0];

  for (const num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      majority = Number(num);
    }
  }

  return majority;
}

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// < ========== TASK I End ========== >

// < ========== TASK H2 Start ========== >

const getDigits = (str: string) => {
  let digits: string = "";

  for (const char of str){
    if (!isNaN(Number(char))){
      digits += char;
    }
  }
  return digits;
}

// console.log(getDigits("sch00ln1"));

// < ========== TASK H2 End ========== >

// < ========== TASK H Start ========== >

function getPositive(arr: number[]): string {
  return arr
    .filter((num) => num > 0)
    .map((num) => String(num))
    .join("");
}

// console.log(getPositive([5, -7, 2]));
// < ========== TASK H end ========== >

// < ========== TASK G start ========== >

function getHighestIndex(arr: number[]) {
  const maxValue = Math.max(...arr);
  const index = arr.indexOf(maxValue);
  return index;
}

// console.log(getHighestIndex([4, 65, 23, 43, 765]));

// < ========== TASK G end ========== >

