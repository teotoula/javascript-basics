var isBool = Boolean(false);

/*onsole.log(Boolean(0), Boolean(1));*/

//console.log(!0, !1, !!1, Boolean(5), !!5);

if (false) {
  console.log("First");
} else if (false) {
  console.log("First");
}

var isLowerThanFive = 4 + 5;

/*if (5 >= 5) {
  console.log("It is!");
} else {
  console.log("No its not!");
}*/

/*if (isLowerThanFive == 5) {
  console.log("It is!");
} else {
  console.log("No its not!");
}*/

/*if ("9" === 9) {
  console.log("It is!");
} else {
  console.log("No its not!");
}*/

/*console.log(true ? "true" : "false");
console.log(false ? "true" : "false");*/

/*if (isLowerThanFive < 5) {
  console.log("Lower than five");
} else if (isLowerThanFive === 5) {
  console.log("Equal five");
} else if (isLowerThanFive > 5) {
  console.log("Equal five");
}*/

var str = "6";
switch (str > 5) {
  case true:
    console.log("Hello");

  case true:
    console.log("hello");
  case false:
    console.log("Hell");
  default:
    console.log("Default");
}
