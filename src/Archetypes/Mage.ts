import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _ENERGY: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this._ENERGY;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;
