const numbers = [
  1, 5, 2, 3, 4, 8, 9, 10, 11, 7, 15, 12, 14, 16, 17, 6, 18, 13, 19, 20,
];
const size = numbers.length;
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      tmp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tmp;
    }
  }
}

console.log(numbers);
