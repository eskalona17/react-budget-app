import React, { useState } from "react";

const Formulario = () => {
  return (
    <form action="">
      <h2>Agrega tus gastos aqui</h2>
      <div className="campo">
        <label htmlFor="">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. 300"
        />
      </div>
      <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
    </form>
  );
};

export default Formulario;
