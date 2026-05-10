// export const isGroupAnagram = (arr) => {
//   console.log("Group Anagram");
//   let obj = {};

//   for (const element of arr) {
//     let sortedElement = element?.split("").sort().join("");
//     if (!obj[sortedElement]) {
//       obj[sortedElement] = obj[sortedElement] || [];
//       obj[sortedElement].push(element);
//     } else {
//       obj[sortedElement].push(element);
//     }
//   }

//   return Object.values(obj).sort();
// };

// console.log(isGroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(isGroupAnagram([""]));

export const isGroupAnagram = (arr) => {
  console.log("Group Anagram");

  const map = new Map();
  let newArr = [];

  for (const elem of arr) {
    let sortedElem = elem.split("").sort().join("");

    if (!map.has(sortedElem)) {
      map.set(sortedElem, map.get(sortedElem) || []);
    }

    map.get(sortedElem).push(elem);
  }

  return [...map.values()];
};

console.log(isGroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(isGroupAnagram([""]));
