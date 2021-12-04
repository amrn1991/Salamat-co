export default function operations(ops) {
  const chars = ops.split(" ");
  const result = [];

  chars.forEach((el, i) => {
    switch (el) {
      case "D":
        result.push(result[i - 1] * 2);
        break;
      case "R":
        result.pop();
        break;
      case "+":
        result.push(result[i - 2] + result[i - 1]);
        break;
      default:
        result.push(el);
        break;
    }
  });
  const final = result.reduce((a, b) => Number(a) + Number(b));
  return final;
}
