import React, { createContext, useState } from 'react';

// Crear el contexto
const TemaContext = createContext();

// Proveedor que envuelve y provee el contexto
export function TemaProvider({ children }) {
    const [temaOscuro, setTemaOscuro] = useState(false);

    const toggleTema = () => setTemaOscuro((prevTema) => !prevTema);

    return (
        <TemaContext.Provider value={{ temaOscuro, toggleTema }}>
            {children}
        </TemaContext.Provider>
    );
}

export default TemaContext;
