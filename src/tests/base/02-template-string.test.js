import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('prueba en 02-template-string.js', ()=>{

    test('Prueba en el metodo getSaludo', ()=>{
        const nombre = 'Rodrigo';

       const saludo = getSaludo(nombre);
        console.log(saludo)
       expect(saludo).toBe('Hola '+ nombre)
    })

    test('Prueba en el metodo getSaludo sin argumentos', ()=>{

       const saludo = getSaludo();

       expect(saludo).toBe('Hola Carlos')
    })
});