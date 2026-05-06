export const isAnagram = (str1, str2) => {
  console.log("isAnagram");
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // for (const char2 of str2) {
  //   if (char2 !== char) {
  // if (!str2.includes(char)) {
  //   return false;
  // }
  // }
  //   }

  //   return true;

  //   console.log(str1.split("").sort().join(""));
  //   console.log(str2.split("").sort().join(""));
  //   return str1.split("").sort().join("") === str2.split("").sort().join("");

  // const seen = new Set(str1);

  // for (const char of str2) {
  //   if (seen.has(char)) {
  //     console.log("before", seen);
  //     seen.delete(char);
  //     console.log("after", seen);
  //   }
  // }

  // console.log("out of loop", seen);

  // return seen.size === 0;

  const map = new Map();

  for (const char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) map.delete(char);
    console.log(map);
  }

  return map.size === 0;
};

// console.log(isAnagram("mar", "ram"));
// console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
// console.log(isAnagram("aab", "ab"));
// console.log(isAnagram("ccac", "aacc"));
// console.log(isAnagram("rail safety", "fairy tales"));
