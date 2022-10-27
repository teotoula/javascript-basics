function userFactory(name, className, grade) {
  return {
    name,
    className,
    grade,
    hasPassed: function () {
      if (this.grade > 2) {
        return true;
      }
    },
  };
}

const users = [
  userFactory(`Bikonja`, `Javascript`, 3),
  userFactory(`Mercedes`, `HTML`, 5),
  userFactory(`Tornado`, `HTML`, 1),
  userFactory(`Torpedo`, `Javascript`, 4),
];
/*
const userNames = users.map((user) => user.name);
const namesAndGrades = users.map((user) => {
  return { name: user.name, grade: user.grade };
});
*/

/*const namesAndGrades = users.map(({ name, grade }, index) => ({
  name,
  grade: grade,
}));

const passedUsers = users.filter(
  (grade, className) => grade > 1 && className === "Javascript"
);
console.log(passedUsers);/*
/*
const namesAndGrades = [];

for (let i = 0; i < users.length; i++) {
    const {name, grade} = users[i];
    
    namesAndGrades.push({name, grade});
}
*/

//console.log(users.find(({ name }) => name === "Mercedes"));

users.forEach(({ name, grade }) => console.log(`${name} has ${grade}`));
