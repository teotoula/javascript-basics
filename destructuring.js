function userFactory(name, className, grade) {
  return {
    name,
    className,
    grade,
    hasPassed: function () {
      if (grade > 2) {
        return true;
      }
    },
  };
}

//const user = userFactory("Gospodin Bik, Javascript", 3);
//const { name, className, ime, ...rest } = user;

function writeName({ name = "This user has no name!" } = {}) {
  console.log(name);
}

const user1 = userFactory("Goluban", "HTML", 1);
const user2 = userFactory("Bik Bodač", "CSS", 5);
const user3 = null;
/*
const { name: name1 } = user1;
const { name: name2 } = user2;
const { name: name3 } = user3;
*/

writeName(user1);
writeName(user2);

writeName(user3 || {});

const array = ["Goluban", "HTML", 1];
const [name, ...rest] = array;

console.log({ name, className, grade });
