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

//** this, class methods, bind, arrow functions*/
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

//**** object destructuring */
const { name } = person;
console.log(`${name} is cool`);
const { name: coolguy } = person;
console.log(`${coolguy} is really cool`);

//** spread operator */
// SHALLOW COPY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (past the root object at least)
const more_colors = [...colors, "purple", "green", "yellow"];
console.log(more_colors);
const monster_man = {
  ...person, //this is the part to pay attention too
  color: more_colors[4],
  describe() {
    console.log(
      `a monster man has a name ${this.name} is ${this.color} and has taken ${this.step} steps`
    );
  },
  describe_unbound() {
    //this was orignally a bug, left in to show its bound to an *instance*
    console.log(
      `a monster man has a name ${monster_man.name} is ${monster_man.color} and has taken ${monster_man.step} steps`
    );
  },
};
monster_man.describe();
console.log("now we clone, then mutate original, output, then oputput clone");
const another_monster_man = { ...monster_man };
another_monster_man.name = "bob";
monster_man.color = "green";
monster_man.walk();
monster_man.describe();
another_monster_man.describe();
another_monster_man.describe_unbound(); //note the difference here becasue of the call is defined with an *instance*
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(...[1, 2, 3]));

//** calsses! */
//** modules */
//** inheritance */
import { Monster } from "./monster"; // eslint-disable-line import/first
const classy_monster = new Monster(monster_man);
console.log(classy_monster);
classy_monster.describe();
const another_classy_monster = new Monster(another_monster_man);
console.log(another_classy_monster);
another_classy_monster.describe(); //so fucking weird! the function was bound when the orignal object was defined!

class SeaMonster extends Monster {
  constructor(monster_man) {
    super(monster_man);
    this.swimming = false;
  }
  swim() {
    this.swimming = ~this.swimming;
  }
  yell() {
    if (this.swimming) console.log("BLUB BLUB BLUUUUERGRRG");
    else super.yell();
  }
}

const sea_monster = new SeaMonster(monster_man);
sea_monster.describe();
sea_monster.yell();
sea_monster.swim();
sea_monster.yell();

//** composition */
import { FlyingMonster } from "./flyingMonster"; // eslint-disable-line import/first
import { JetPack } from "./jetpack"; // eslint-disable-line import/first
const flying_monster = new FlyingMonster(monster_man, new JetPack());
flying_monster.fly();
