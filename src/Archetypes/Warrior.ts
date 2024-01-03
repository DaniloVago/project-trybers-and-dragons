import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _ENERGY: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this._ENERGY;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;