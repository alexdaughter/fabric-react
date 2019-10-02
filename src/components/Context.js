import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
    const [items, setItems] = useState([]);
    const [state, setState] = useState(''); 
    const [ show, setShow ] = useState([]);

    return(
        <Context.Provider value={{items, setItems, state, setState, show, setShow}}>
            {props.children}
        </Context.Provider>
    )
}
