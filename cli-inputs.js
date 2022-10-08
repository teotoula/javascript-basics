var inputParams = process.argv.slice(2);
var firstParam = inputParams[0];
var secondParam = inputParams[1];
var thirdParam = inputParams[2] || "No param passed";

//console.log(firstParam, secondParam, thirdParam, typeof null);

/*if (firstParam) {
  console.log(`First param is truthy: ${firstParam}`);
}

if (secondParam) {
  console.log(`Second param is truthy: ${secondParam}`);
}

if (thirdParam) {
  console.log(`third param is truthly: ${thirdParam}`);
}*/

/*if (firstParam || (secondParam && thirdParam)) {
  console.log(
    `All params are truthy: ${firstParam} ${secondParam}`,
    thirdParam
  )}
;*/

var allParams =
  firstParam && !secondParam && thirdParam
    ? `All params are truth`
    : "At least one is falsy";

console.log(allParams);
