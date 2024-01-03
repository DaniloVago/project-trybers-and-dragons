export type EnergyType = 'mana' | 'stamina';

//  interface: define como os objetos Energy devem estar
export default interface Energy {
  type_: EnergyType;
  amount: number;
}