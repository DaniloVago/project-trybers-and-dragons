import Race from './Race';

class Halfling extends Race {
  private _MAX_LIFE_POINTS = 60;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this._MAX_LIFE_POINTS;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;