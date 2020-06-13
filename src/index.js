import _ from "lodash";

const person = {
  name: "martin",
  step: 0,
  walk() {
    console.log(this.name + " has walked " + this.step++);
  },
  talk(args = "") {
    console.log(`this talk${args}`, this);
  },
  talkLater() {
    setTimeout(() => this.talk(" later"), 0);
  },
  talkNow() {
    setTimeout(function () {
      console.log("this talk now", this);
    }, 0);
  },
};

//**
//this, class methods, bind, arrow functions
//
_.range(4).forEach((value, index) => person.walk(index)); //were walking...
person.talk(); //this is person
let talk = person.talk;
talk(); //this is window but strict is on so undefined
talk = talk.bind(person);
talk(); //this is person now
talk.call(person); //binds this to person
person.talkNow(); //this is window
person.talkLater(); //this is person (b/c arrow function)

const colors = [0, 1, 2, 3];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

//**** */
// object destructuring
//***** */

const { name } = person;

console.log(`${name} is cool`);
const { name: coolguy } = person;
console.log(`${coolguy} is really cool`);

//** spread oeprator */
const more_colors = [...colors, "purple", "green", "yellow"];
console.log(more_colors);
const monster_man = {
  ...person,
  color: more_colors[4],
  describe() {
    console.log(
      `a monster man has a name ${monster_man.name} is ${monster_man.color} and has taken ${monster_man.step} steps`
    );
  },
};
monster_man.describe();
const another_monster_man = { ...monster_man };
another_monster_man.name = "bob";
monster_man.color = "green";
monster_man.walk();
monster_man.describe();
another_monster_man.describe();
//they are the same still because the spread operator goes only "one level deep" when copying objects (only the root object is allocated new memory, the rest is references to the original)
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(...[1, 2, 3]));

//**calsses! */
class Monster {
  constructor(monster_man) {
    Object.assign(this, monster_man); //this is fucking cool
  }
  yell() {
    console.log(this.name);
  }
}
const classy_monster = new Monster(monster_man);
console.log(classy_monster);
