// abstract: todas as classes derivadas de Race devem implementar o maxLifePoints
abstract class Race {
  // private: só pode ser usado dentro da class Race
  // static:  associa uma propriedade ou método à própria classe em vez de instâncias individuais
  static instances = 0;

  private _name: string;
  private _dexterity : number;

  constructor(name: string, dexterity : number) {
    this._name = name; 
    this._dexterity = dexterity;
    Race.instances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity() : number {
    return this._dexterity;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;