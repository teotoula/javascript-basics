function createBull(name, height, weight) {
  const bull = {
    name,
    height,
    weight,
    moo: function () {
      console.log(`${this.name} says Moooo!`);
    },

    bullCategory: function () {
      if (this.height > 1.8 && this.weight > 850) {
        return "Heavyweight bull";
      }

      return "Useless bull";
    },
  };
  bull.moo();

  return bull;
}

const bik1 = createBull("Bikonja", 1.5, 800);
const bik2 = createBull("Mercedes", 1.9, 900);
const bik3 = createBull("Tornado", 1.9, 900);

console.log(bik1.bullCategory());
console.log(bik2.bullCategory());
console.log(bik3.bullCategory());
