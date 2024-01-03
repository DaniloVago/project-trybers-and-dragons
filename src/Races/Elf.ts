import Race from './Race';

class Elf extends Race {
  private _MAX_LIFE_POINTS = 99;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._MAX_LIFE_POINTS;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;
