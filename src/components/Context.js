import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
    const [items, setItems] = useState([]);
    const [state, setState] = useState(''); 
    const [ filter, setFilter ] = useState('');
    // const [ showActive, setShowActive ] = useState([]);
    // const [ showCompleted, setShowCompleted ] = useState([]);

    return(
        <Context.Provider value={{items, setItems, state, setState, filter , setFilter}}>
            {props.children}
        </Context.Provider>
    )
}
