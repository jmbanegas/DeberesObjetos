// Definimos un tipo de unión que incluye todos los nombres de los planetas soportados.
type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export function age(planet: Planet, seconds: number): number {
    // Definimos el número de segundos en un año terrestre.
    const earthYearInSeconds = 31557600;

    // Creamos un objeto que mapea cada planeta a su periodo orbital en años terrestres.
    const orbitalPeriods: Record<Planet, number> = {
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'earth': 1.0,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132
    };

    // Convertimos la edad de segundos a años terrestres.
    const yearsOnEarth = seconds / earthYearInSeconds;

    // Calculamos la edad en el planeta especificado.
    const ageOnPlanet = yearsOnEarth / orbitalPeriods[planet];

    // Devolvemos la edad en el planeta, formateada a dos decimales.
    return parseFloat(ageOnPlanet.toFixed(2));
}


export class DnDCharacter {
  // Propiedades públicas que representan las habilidades del personaje
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  // Constructor que inicializa las habilidades y los puntos de golpe del personaje
  constructor() {
    // Genera una puntuación de habilidad para cada atributo
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    // Calcula los puntos de golpe iniciales basados en la constitución
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  // Método estático para generar una puntuación de habilidad
  public static generateAbilityScore(): number {
    // Lanza cuatro dados de seis caras y guarda los resultados en un array
    const rolls = [
      DnDCharacter.rollDie(),
      DnDCharacter.rollDie(),
      DnDCharacter.rollDie(),
      DnDCharacter.rollDie()
    ];
    // Ordena los resultados en orden descendente
    rolls.sort((a, b) => b - a);
    // Toma los tres valores más altos
    const highestThree = rolls.slice(0, 3);
    // Suma los tres valores más altos y devuelve el resultado
    const sum = highestThree.reduce((a, b) => a + b, 0);
    return sum;
  }

  // Método estático para calcular el modificador de una habilidad
  public static getModifierFor(abilityValue: number): number {
    // Calcula el modificador usando la fórmula (abilityValue - 10) / 2 y redondea hacia abajo
    return Math.floor((abilityValue - 10) / 2);
  }

  // Método auxiliar estático para rodar un dado de seis caras
  private static rollDie(): number {
    // Genera un número aleatorio entre 1 y 6
    return Math.floor(Math.random() * 6) + 1;
  }
}

