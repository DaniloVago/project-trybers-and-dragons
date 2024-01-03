import Race from './Race';

class Orc extends Race {
  private _MAX_LIFE_POINTS = 74;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this._MAX_LIFE_POINTS;
  }
  
  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;