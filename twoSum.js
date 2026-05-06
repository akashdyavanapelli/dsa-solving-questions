export const twoSum = (arr, target) => {
  if (arr.length === 0) return "It is an empty array";

  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];

    if (seen.has(compliment)) {
      return [seen.get(compliment), i];
    }

    seen.set(arr[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([], 6));
