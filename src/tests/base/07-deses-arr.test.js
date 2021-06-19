import { retornaArreglo } from "../../base/07-deses-arr"

describe('Preubas en desestructuracion',()=>{

    test('debe retornar un string y un numero',()=>{
        const [letras,numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);

        console.log(typeof letras) // el typeof es para saber el tipo de dato de la variable
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})