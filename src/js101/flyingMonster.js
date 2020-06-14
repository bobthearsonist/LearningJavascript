import { Monster } from "./monster";
export { FlyingMonster };

class FlyingMonster extends Monster {
  constructor(monster_man, flight_method) {
    super(monster_man);
    this.flight_method = flight_method;
  }
  fly() {
    this.flight_method.fly();
  }
}
