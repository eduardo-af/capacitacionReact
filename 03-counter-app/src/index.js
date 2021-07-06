import React from 'react';
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './estilos.css'


const divRoot = document.querySelector('#app');

ReactDOM.render( <PrimeraApp saludo = "Hola mundo" />, divRoot );
