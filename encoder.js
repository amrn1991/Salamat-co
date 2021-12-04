export default function encoder({ inputString, repeatCount }) {
  // creating the array for allowed values
  const allowed = Array.from(Array(26)).map((e, i) =>
    String.fromCharCode(i + 97)
  );

  // checking if the inputString is allowed (not a number or etc.)
  for (let i of inputString) {
    if (!allowed.includes(i)) return false;
  }

  // turning the input to an array of letters
  const letters = inputString.split("");
  // splitting the last letter and join it in the beginning
  const last = letters.pop();
  letters.unshift(last);

  // changing the letter to its next value in alphabet
  // repeats by for loop
  for (let j = 0; j < repeatCount; j++) {
    letters.map((el, i) => {
      const index = allowed.findIndex((ltr) => ltr === el);

      letters[i] === "z"
        ? (letters[i] = "a")
        : (letters[i] = allowed[index + 1]);
    });
  }
  return letters.join("");
}

