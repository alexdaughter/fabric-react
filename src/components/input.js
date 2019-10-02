import React, { useState, useContext } from 'react';
import { TextField, DefaultButton, Stack } from 'office-ui-fabric-react/';
import  CheckComponent  from './CheckComponent';
import { Context } from './Context';


export default function MyInput() {

    const {items, setItems, state, setState} = useContext(Context);

    const uploadState  = (e) => {
        setState(e.target.value);
    }
   
    const handleAddItem = () => {

        const lastId = items.length-1;
        const newId =  items[lastId] ? items[lastId].Id+1 : 0 ;

        setItems(
            [
                ...items,
                { Name: state, 
                    Id: newId,
                    Editable: false
                }          
            ]
        ) 
        setState('')
    }  
    
    return(
        <div>
        <h1>ToDos</h1>
        <Stack horizontal horizontalAlign="center">
        <TextField value={state} onChange={uploadState} onKeyPress={(enter) => {enter.key === 'Enter' && handleAddItem()}}/>
        <DefaultButton primary text="Click to add" onClick={handleAddItem}/>
        </Stack>
        <ul>
            {items.map( item =><li><CheckComponent item={item} data-id={item.Id}/></li> )}
        </ul>
        </div>
    )
}