class User {
  name;
  surname;
  className;

  set fulName(sex) {
    this.name = sex === "MALE" ? `Mr. ${this.name}` : `Mrs. ${this.name}`;
  }

  getFulName() {
    return `${this.name} ${this.surname}`;
  }
  constructor(name, surname) {
    // console.log("Constructor has been called!");
    this.name = name;
    this.surname = surname;
    this.className = "Javascript lessons";
  }

  writeClassName() {
    console.log(this.className);
  }
}

const user = new User("Bikonja", "Bikić");
user.fulName = "MALE";
User.fullName = console.log(user, user.getFulName());
