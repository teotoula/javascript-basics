function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (max < number) {
      max = number;
    }
  }
  return max;
}
const number = [2, 5, 3, 6, 8, 4, 9, 2, 4, 6, 3, 7, 8];
const maxNumber = max(number);

console.log(maxNumber);

function min(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (min > number) {
      min = number;
    }
  }
  return min;
}

function minMax(numbers) {
  return min(numbers) + max(number);
}

const numbers = [2, 5, 3, 6, 8, 4, 9, 2, 4, 6, 3, 7, 8];
const minNumber = min(numbers);

console.log(minMax(numbers));
