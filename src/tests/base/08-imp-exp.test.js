import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Preubas en funciones de heroes',()=>{

    test('debe retornar un heroe por un id',()=>{
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find(h => h.id=== id);

        expect(heroe).toEqual(heroeData);
    })

    test('debe retornar un undefine si el id no es corecto',()=>{
        const id = 19;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    })

    test('debe retornar un array segun el numero de owner ',()=>{
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        //console.log(heroe);

        const heroeOwner = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeOwner);
    })

    test('debe retornar el length del array ',()=>{
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        

        expect(heroe.length).toBe(2);
    })


})