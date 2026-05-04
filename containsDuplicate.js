export const containsDuplicate = (arr) => {
  console.log("containsDuplicate");
  if (!Array.isArray(arr)) return false;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //       return true;
  //     }
  //   }
  // }

  // const seen = new Set();

  // for (const element of arr) {
  //   if (seen.has(element)) {
  //     return true;
  //   }

  //   seen.add(element);
  // }

  // return false;

  return new Set(arr).size !== arr.length;
};

// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 2, 3, 1]));
//   console.log(containsDuplicate([]));
