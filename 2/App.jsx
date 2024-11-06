import React from 'react';
import './App.css';
import { TemaProvider } from './TemaContext';
import BtnTema from './BtnTema';


function App(){
    return(
        <TemaProvider> {/* lo que este dentro de estas etiquetas es lo que abarca el contexto */}
            <div className= {temaOscuro ? 'dark' : 'light'}>
                <h1>Hola mundo</h1>
                <BtnTema/>
            </div>
        </TemaProvider>
    );
}