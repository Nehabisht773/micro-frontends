import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const mount =(el)=>{
    ReactDOM.render(
        <App/>,
        el
    )
    // const cartText = `<div>Hi there!</div>`;
    // el.innerHTML = cartText;
}


if(process.env.NODE_ENV==='development'){
    const devRoot = document.querySelector('#marketing-root')
    if(devRoot)
    mount(devRoot)
}

export {mount}
