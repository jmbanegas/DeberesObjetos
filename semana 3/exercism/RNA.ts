export function toRna(dnaStr: string): string {
    let rnaStr = '';
    
    for (let nucleotide of dnaStr) {
      switch (nucleotide) {
        case 'G':
          rnaStr += 'C';
          break;
        case 'C':
          rnaStr += 'G';
          break;
        case 'T':
          rnaStr += 'A';
          break;
        case 'A':
          rnaStr += 'U';
          break;
        default:
          throw new Error('Invalid input DNA.'); // Cambia el mensaje de error
      }
    }
    
    return rnaStr;
}
  