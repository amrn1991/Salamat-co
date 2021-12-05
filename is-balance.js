export default function isBalance(input) {
  let chars = "[](){}"; // allowed values for input
  let temp = []; // a temporary array for holding values

  if (isAllowed(input, chars)) {
    for (let char of input) {
      let pos = chars.indexOf(char); // the index of the character
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

  // checking to see if input value is a part of the allowed array
  for (let i of value) {
    if (!chars.includes(i)) {
      pass = false;
      break;
    }
  }
  return pass;
}
