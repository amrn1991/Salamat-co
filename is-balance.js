export default function isBalance(input) {
  let chars = "[](){}";
  let temp = [];

  if (isAllowed(input, chars)) {
    for (let char of input) {
      let pos = chars.indexOf(char);
      if (pos % 2 === 0) {
        temp.push(pos + 1);
      } else {
        if (temp.pop() !== pos) {
          return false;
        }
      }
    }
    return temp.length === 0;
  } else {
    return false;
  }
}

function isAllowed(value, chars) {
  let pass = true;

  for (let i of value) {
    if (!chars.includes(i)) {
      pass = false;
      break;
    }
  }
  return pass;
}
