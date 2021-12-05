export default function getRepeatedInfo(number) {
  if (typeof number !== "number") return false;

  let allowed = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numArr = number.toString().split("");
  let result = {};

  for (let num of numArr) {
    // if the input is not allowed then return
    if (!allowed.includes(num)) return false;

    let parsed = parseInt(num);
    result[parsed] = "";

    for (let i = 0; i < parsed; i++) {
      // if the key exists already, then reiterate for the second time
      if (numArr.indexOf(num) !== numArr.lastIndexOf(num)) {
        result[parsed] += num;
      }
      result[parsed] += num;
    }
  }

  if (Object.keys(result).length === 0) {
    return false;
  } else {
    return result;
  }
}
