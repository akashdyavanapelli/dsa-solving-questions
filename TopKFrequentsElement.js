export const topKFrequentElement = (arr, k) => {
  //   let obj = {};
  //   let newArr = [];
  //   for (const elem of arr) {
  //     obj[elem] = (obj[elem] || 0) + 1;
  //   }

  //   for (const key in obj) {
  //     if (obj[key] >= k) {
  //       newArr.push(typeof key === "string" ? Number(key) : key);
  //     }
  //   }

  //   return newArr;

  const map = new Map();

  // count frequency
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  // sort by frequency
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  // take top k
  return sorted.slice(0, k).map((entry) => entry[0]);
};

// console.log(topKFrequentElement([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequentElement([1], 1));
console.log(topKFrequentElement([1, 2, 1, 2, 1, 2, 3, 1, 3, 2, 3], 2));
