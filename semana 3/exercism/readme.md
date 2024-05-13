EXPLICACION DEL CODIGO LEAP.
1. `export function isLeap(year: number) {`: Esto define una función llamada `isLeap` que toma un parámetro `year` de tipo `number`. El `export` indica que esta función puede ser utilizada fuera de este archivo.

2. `if (year % 4 ==0 && year % 100 !=0){ return true }`: Esta línea verifica si el año es divisible por 4 (`year % 4 == 0`) y no es divisible por 100 (`year % 100 != 0`). Si se cumplen ambas condiciones, significa que el año es divisible por 4 pero no es un año secular (no es divisible por 100), por lo tanto, es un año bisiesto. En ese caso, la función devuelve `true`.

3. `if (year % 100==0 && year % 400==0){ return true }`:Verifica si el año es divisible por 100 (`year % 100 == 0`) y también es divisible por 400 (`year % 400 == 0`). Si ambas condiciones se cumplen, significa que el año es divisible por 100 y por 400, lo que lo convierte en un año secular (años como 2000 o 2400), y por lo tanto es bisiesto. En ese caso, la función también devuelve `true`.

4. `else { return false }`: Si ninguna de las condiciones anteriores se cumple, la función devuelve `false`, lo que significa que el año no es bisiesto.
LINK DEL VIDEO:


                                        EXOLICACION DEL CODIGO RNA Transcription


1. `export function toRna(dnaStr: string): string {`: Esto define una función llamada `toRna` que toma una cadena de ADN (`dnaStr`) como entrada y devuelve una cadena de ARN como resultado. La expresión `: string` después de los paréntesis indica que la función devolverá una cadena de texto.

2. `let rnaStr = '';`: Se inicializa una cadena vacía `rnaStr` que almacenará la cadena de ARN resultante.

3. `for (let nucleotide of dnaStr) {`: Se inicia un bucle `for...of` que iterará sobre cada carácter (`nucleotide`) en la cadena de ADN (`dnaStr`).

4. `switch (nucleotide) {`: Se utiliza una declaración `switch` para evaluar el valor de `nucleotide` y determinar qué acción tomar basada en su valor.

5. `case 'G':`: En caso de que `nucleotide` sea `'G'` (adenina), se ejecuta el siguiente bloque de código.

6. `rnaStr += 'C';`: Se agrega `'C'` (citosina) a la cadena de ARN (`rnaStr`) como el complemento de `'G'`.

7. `break;`: Se utiliza `break` para salir del `switch` después de que se ha encontrado una coincidencia. Esto evita que se ejecuten los casos siguientes. Se repiten los pasos  los casos 5,6,7 `'C'`, `'T'`, y `'A'`, añadiendo el complemento de ARN para cada nucleótido de ADN.

9. `default:`: Este es el caso que se ejecuta si `nucleotide` no coincide con ninguno de los casos anteriores en el `switch`.

10. `throw new Error('Invalid input DNA.');`: Si se encuentra un nucleótido de ADN que no es `'G'`, `'C'`, `'T'`, o `'A'`, se lanza un error con el mensaje `'Invalid input DNA.'`.

11. `return rnaStr;`: Finalmente, la función devuelve la cadena de ARN resultante.
LINK DEL VIDEO:

