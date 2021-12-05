export default function removerRepetitive(string) {
  const letters = string.split("");

  for (let i = 0; i < letters.length; i++) {
    // if the next letter is the same, then we take it out of the array
    // because a letter is removed, we reduce the iterator by one
    if (letters[i] === letters[i + 1]) {
      letters.splice(i, 1);
      i--;
    }
  }
  return letters.join("");
}
