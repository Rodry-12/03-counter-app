import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import { shallow } from "enzyme";

describe('Pruebas en <PrimeraApp /> ', () => {
    
   /* test('debe mostrar el mensaje Hola soy Goku ', () => {
        
        const saludo = 'Hola soy Goku';
        const numero = 10;
        const { getByText} = render(<PrimeraApp saludo = {saludo} numero = {numero}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    })*/

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp />)
    })
    
    
})
