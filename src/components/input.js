import React, { useState, useContext } from 'react';
import { TextField, DefaultButton, Stack } from 'office-ui-fabric-react/';
import  CheckComponent  from './CheckComponent';
import { Context } from './Context';
import Sections from './Sections';


export default function MyInput() {

    const {items, setItems, state, setState, filter} = useContext(Context);

    const uploadState  = (e) => {
        setState(e.target.value);
    }
   
    const handleAddItem = () => {

        const lastId =items.length ? items[items.length-1].Id : 0;
        const newId =  lastId+1 ;

        setItems(
            [
                ...items,
                { Name: state, 
                    Id: newId,
                    Editable: false,
                    Checked: false
                }          
            ]
        ) 
        setState('')
    }  

    let filteredItems;

    if (filter === 'Active') {
        filteredItems = items.filter(item => !item.Checked)
    } else if (filter === 'Completed') {
        filteredItems = items.filter(item => item.Checked)
    } else {
        filteredItems = items;
    }

    const handleRemoveCompleted = (e) => {
        const completedItems = items.filter(item => !item.Checked);
        setItems(completedItems);
    }
     
    return(
        <div>
            <h1>ToDos</h1>
            <Stack horizontal horizontalAlign="center">
            <TextField value={state} onChange={uploadState} onKeyPress={(enter) => {enter.key === 'Enter' && handleAddItem()}}/>
            <DefaultButton primary text="Click to add" onClick={handleAddItem}/>
            </Stack>
            <Sections items={items}/>
            <ul class="ms-Grid" dir="ltr">
                {filteredItems.map( item =><li><CheckComponent item={item} data-id={item.Id}/></li> )}
            </ul>
            <DefaultButton primary text="Clear Completed" onClick={handleRemoveCompleted} />
        </div>
    )
}