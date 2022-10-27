function relationToLuke(person) {
  switch (person) {
    case "Darth Vader":
      return "father";
    case "Leia":
      return " sister";
    case "Han":
      return " brother in law";
    case "R2D2":
      return "droid";

    default:
      return null;
  }
}
function say(realtion) {
  return `Luke, I am your ${realtion}`;
}

const relation = relationToLuke("Darth Vader");

if (!relation) {
  console.log("I dont know who I am");
}

console.log(say(relation));
