import React, { useContext } from 'react';
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { Context } from './Context';

export default function CheckComponent ({ item }) {

    const {items, setItems} = useContext(Context);

    const handleVisible = (e) => {
        const idEdit = parseInt(e.currentTarget.getAttribute('data-id'));
        const taskEditable = items.findIndex(item => item.Id===idEdit);
        items[taskEditable].Editable = false
        setItems([...items]);
    }

    const handleDelete = (e) => {
        const idSelected = parseInt(e.currentTarget.getAttribute('data-id'));
        const filteredItems = items.filter(item => item.Id!==idSelected);
        setItems(filteredItems);
    }

    const handleEdit = (e) => {
        const idEdit = parseInt(e.currentTarget.getAttribute('data-id'));
        const taskEditable = items.findIndex(item => item.Id === idEdit);
        items[taskEditable].Editable = true;
        setItems([...items])
    }

    const editTask  = (e) => {
        const idToEdit = parseInt(e.target.getAttribute('data-id')-1);
        console.log(idToEdit);
        items[idToEdit].Name = e.target.value;
        setItems([...items]);
    }

    const handleCheck = (e) => {
       const idCheckItem = parseInt(e.currentTarget.id)-1;
       console.log(idCheckItem);
       const isChecked = e.currentTarget.checked;
        items[idCheckItem].Checked = isChecked;
        setItems([...items]);
    }

    return (
        <div className="taskList">
            {!item.Editable && 
                <Stack horizontal horizontalAlign="center">
                <div>
                    <Checkbox label={item.Name} onChange={handleCheck} id={item.Id} />
                </div>
                <div>
                <IconButton iconProps={{iconName: "Edit"}} title="Edit" ariaLabel="Edit" onClick={handleEdit} data-id={item.Id}/>
                <IconButton iconProps={{iconName: "Cancel"}} title="Cancel" ariaLabel="Cancel" onClick={handleDelete} data-id={item.Id}/>
                </div>       
                </Stack>}

            {item.Editable && 
                <Stack horizontal horizontalAlign="center">
                <TextField value={item.Name} onChange={editTask} data-id={item.Id}/>
                <DefaultButton text="Save" onClick={handleVisible} data-id={item.Id}/>
                </Stack>}
        </div>
    )

}