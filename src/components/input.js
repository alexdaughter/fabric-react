import React, { useState, useContext } from 'react';
import { TextField, DefaultButton, Stack, Pivot, PivotItem } from 'office-ui-fabric-react/';
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
                    Editable: false,
                    Active: false
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
            <Stack horizontal horizontalAlign="center">
                <Pivot>
                    <PivotItem
                    headerText="All"
                    headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'All Title'
                    }}>
                    </PivotItem>
                </Pivot>
                <Pivot>
                    <PivotItem
                    headerText="Active"
                    headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Active Title'
                    }}>
                    </PivotItem>
                </Pivot>
                <Pivot>
                    <PivotItem
                    headerText="Completed"
                    headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Completed Title'
                    }}>
                    </PivotItem>
                </Pivot>
            </Stack>
            <ul>
                {items.map( item =><li><CheckComponent item={item} data-id={item.Id}/></li> )}
            </ul>
        </div>
    )
}