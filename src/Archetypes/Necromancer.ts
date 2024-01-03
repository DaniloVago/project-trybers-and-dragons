import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _ENERGY: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType {
    return this._ENERGY;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}

export default Necromancer;