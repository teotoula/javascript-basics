function execute(fn) {
  fn();
}

function callback() {
  console.log("Log something");
}

execute(callback);
/*
const arr = [0, 1, 2, 3];

arr.map(function (num) {
  return num + 1;
});

console.log(arr, arr2);
*/

const arFn = (arguments) => {
  // body
};

function callback() {
  console.log("Log something");
}

const arrFn = () => console.log("Log something");

execute(callback);

execute(function () {
  console.log("Log something");
});
