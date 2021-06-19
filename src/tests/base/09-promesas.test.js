import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes'
describe('Pruebas con promesas', () => {
    
    // done es para decirle a jest cuando ya debe terminar la prueba
    test('debe retornar un heroe async',( done )=>{
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe =>{

                expect(heroe).toBe(heroes[0]);
                done();
            })
    });

    test('debe tener un herror si el heroe por id no existe', ( done) => {
        
        const id = 10;
        getHeroeByIdAsync.catch(error => { 

            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })

    })
    
    
})
