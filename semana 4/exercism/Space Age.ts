type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export function age(planet: Planet, seconds: number): number {
    const earthYearInSeconds = 31557600;

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

    const yearsOnEarth = seconds / earthYearInSeconds;
    const ageOnPlanet = yearsOnEarth / orbitalPeriods[planet];

    return parseFloat(ageOnPlanet.toFixed(2));
}
