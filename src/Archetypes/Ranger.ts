import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _ENERGY: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this._ENERGY;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;