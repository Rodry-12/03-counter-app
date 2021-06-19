//import { Fragment } from "react";
import PropTypes from 'prop-types' // Esta importacion la utilizamos para obligar a que nos envien las propiedades para poder utilizar el componente

const PrimeraApp = ( {saludo, numero,subtitulo}) => {  // Desestructuracion 

   // const saludo = 'Hola Mundo';

  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicacion</p>
      <p>el numero es {numero}</p>
      <p>{subtitulo}</p>
    </>
  );
};

// Se define el tipo de las propiedades de las variables y tambien se dice que es requerrido o no
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired, // si tiene isRequired se dice que es obligatorio, pero si no lo tiene puede ser enviado o no
  numero: PropTypes.number.isRequired
}

// Esta es una manera de decir que nuestro componente tiene un valor por defecto
PrimeraApp.defaultProps={
  subtitulo: 'Soy un programador'
}
 

export default PrimeraApp;
