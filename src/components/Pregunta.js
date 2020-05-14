import React from 'react'

const Pregunta = () => {
    return(
        <>
            <h2>Escribe tu presupuesto</h2>
            <form action="">
                <input type="text" className="u-full-width" placeholder="Escribe tu presupuesto"/>
                <input type="submit" className="button-primary u-full-width" value="definir presupuesto"/>
            </form>
        </>
    )
}

export default Pregunta