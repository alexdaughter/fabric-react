import React, { useState, useContext } from 'react';
import { Pivot, PivotItem, Stack } from 'office-ui-fabric-react/';
import { Context } from './Context';
import  CheckComponent  from './CheckComponent';
 

export default function Sections ({ item }) {
    
    const {showActive  , showCompleted, setShowCompleted, setShowActive} = useContext(Context);

    const handleSectionActive = (e) => {
        const SectionActive = showActive.filter(item => !item.Checked)
        console.log(SectionActive);
        setShowActive([SectionActive]);
        // const pepe = showActive.map(item => item)   
        // console.log(pepe) 
    }

    const handleSectionCompleted = (e) => {
        const SectionCompleted = showActive.filter(item => item.Checked)
        console.log(SectionCompleted);
        setShowCompleted([SectionCompleted]);
    }

    return(
        <>
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
                <Pivot onLinkClick={handleSectionActive}>
                    <PivotItem
                    headerText="Active"
                    itemKey="active"
                    headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Active Title',
                    }}>
                    </PivotItem>
                </Pivot>
                <Pivot onLinkClick={handleSectionCompleted}>
                    <PivotItem
                    headerText="Completed"
                    itemKey="completed"
                    headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Completed Title',
                    }}>
                    </PivotItem>
                </Pivot>
            </Stack>
            <Stack>
                <ul>
                    {showActive.map(item => <li><CheckComponent item={item}/></li>)}
                </ul>
            </Stack>

        </>
    )
}