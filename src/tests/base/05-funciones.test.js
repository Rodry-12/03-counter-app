import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas de 05-funciones', ()=>{

    test('getUser debe retornar un objecto', ()=>{
    
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest); // toEqual es para evaluar los objectos, tanto propiedades como sus valores
    })

    //getUser debe retornar un obejecto
    
    test('getUser debe retornar un obejecto', ()=>{
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})