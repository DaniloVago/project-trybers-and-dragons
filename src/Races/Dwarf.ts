import Race from './Race';

class Dwarf extends Race {
  private _MAX_LIFE_POINTS = 80;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._MAX_LIFE_POINTS;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;
