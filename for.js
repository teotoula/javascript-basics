/*for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/

var inputNumber = 5;
var fact = 1;

for (var i = inputNumber; i > 0; i--) {
  fact *= i;
}

console.log(fact);
