import React, { useState } from "react";
import Error from './Error'

const Pregunta = () => {
  //definir el state
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error, guardarError ] = useState(false)

  //funcion que lee el presupuesto
  const definirPresupuesto = e => {
      guardarCantidad(parseInt(e.target.value, 10))
  }
  //submit para definir el presupuesto
  const agregarPresupuesto = e => {
      e.preventDefault()

      //validar
    if(cantidad < 1 || isNaN( cantidad )){
        guardarError(true)
        return;
    }

      //si se pasa la validación
      guardarError(false)
  }
  return (
    <>
      <h2>Escribe tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="text"
          className="u-full-width"
          placeholder="Escribe tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
