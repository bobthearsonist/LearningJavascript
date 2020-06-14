export class Monster {
  constructor(monster_man) {
    Object.assign(this, monster_man); //this is fucking cool
  }
  yell() {
    console.log(this.name);
  }
}
