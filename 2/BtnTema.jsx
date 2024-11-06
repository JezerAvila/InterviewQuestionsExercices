import React, { useContext } from 'react';
import TemaContext from './TemaContext';

export default function BtnTema() {
    const { temaOscuro, toggleTema } = useContext(TemaContext);

    return (
        <button onClick={toggleTema}>
            Cambiar a {temaOscuro ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
}
