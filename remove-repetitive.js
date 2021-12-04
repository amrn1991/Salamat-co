export default function removerRepetitive(string) {
  const letters = string.split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      letters.splice(i, 1);
      i--;
    }
  }
  return letters.join("");
}
