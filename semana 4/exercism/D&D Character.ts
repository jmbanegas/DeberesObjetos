export class DnDCharacter {
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    public hitpoints: number;
  
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore();
      this.dexterity = DnDCharacter.generateAbilityScore();
      this.constitution = DnDCharacter.generateAbilityScore();
      this.intelligence = DnDCharacter.generateAbilityScore();
      this.wisdom = DnDCharacter.generateAbilityScore();
      this.charisma = DnDCharacter.generateAbilityScore();
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
  
    public static generateAbilityScore(): number {
      const rolls = [
        DnDCharacter.rollDie(),
        DnDCharacter.rollDie(),
        DnDCharacter.rollDie(),
        DnDCharacter.rollDie()
      ];
      rolls.sort((a, b) => b - a);
      const highestThree = rolls.slice(0, 3);
      const sum = highestThree.reduce((a, b) => a + b, 0);
      return sum;
    }
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2);
    }
  
    private static rollDie(): number {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  