const Colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ] as const;
  
  export type Color = typeof Colors[number];    
  
  const prefixes = [
    [1_000_000_000, "giga"],
    [1_000_000, "mega"],
    [1000, "kilo"],
  ] as const;
  
  export function decodedResistorValue([band1, band2, band3]: Color[]): string {
    const [tens, ones, zeros] = [band1, band2, band3].map((b) =>
      Colors.indexOf(b)
    );
    let num = (tens * 10 + ones) * 10 ** zeros;
    const [div, prefix] = prefixes.find(([d]) => num >= d) ?? [1, ""];
    return `${num / div} ${prefix}ohms`;
  }
  