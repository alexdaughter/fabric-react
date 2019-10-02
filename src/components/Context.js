import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
    const [items, setItems] = useState([]);
    const [state, setState] = useState(''); 
    const [ showActive, setShowActive ] = useState([]);
    const [ showCompleted, setShowCompleted ] = useState([]);

    return(
        <Context.Provider value={{items, setItems, state, setState, showActive, showCompleted, setShowCompleted, setShowActive}}>
            {props.children}
        </Context.Provider>
    )
}
