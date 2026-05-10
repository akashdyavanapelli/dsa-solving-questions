export const encodeDecodeString = (arr) => {
  const encodeStr = (arr) => {
    let encdStr = "";

    for (const elem of arr) {
      encdStr += elem.length + "#" + elem;
    }
    return encdStr;
  };

  const encStr = encodeStr(arr);

  const decodeStr = (encStr) => {
    console.log("decodeStr");
    console.log(encStr);
    let newArr = [];
    let i = 0;

    while (i < encStr.length) {
      let j = i;

      if (encStr[i] !== "#") {
        j++;
      }

      let length = Number(encStr.slice(i, j));
      let word = encStr.slice(j + 1, j + 1 + length);

      newArr.push(word);
      i = j + 1 + length;
    }

    console.log(newArr);
    return newArr;
    // let str = "";
    // for (const char of encStr) {
    //   let convStrToNum = isNaN(char) ? char : Number(char);
    //   console.log(typeof convStrToNum);
    //   if (typeof convStrToNum !== "number") {
    //     str += char;
    //   } else {
    //     if (str !== "") {
    //       newArr.push(str);
    //       str = "";
    //     }
    //     if (convStrToNum === 0) {
    //       str += "";
    //       newArr.push(str);
    //     }
    //   }
    // }
    // newArr.push(str);
    // return newArr;
  };

  return decodeStr(encStr);
};

console.log(encodeDecodeString(["neet", "code", "love", "you"]));
// console.log(encodeDecodeString(["hello", "", "world"]));
// console.log(encodeDecodeString(["we#love", "coding"]));
