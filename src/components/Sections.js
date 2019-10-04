import React, { useState, useContext } from 'react';
import { Pivot, PivotItem, Stack } from 'office-ui-fabric-react/';
import { Context } from './Context';
import  CheckComponent  from './CheckComponent';
 

export default function Sections ({ item }) {
    
    const {items, filter, setFilter} = useContext(Context);

    const handleSectionActive = (e) => {
        setFilter('Active');
        // const SectionActive = items.filter(item => !item.Checked)
        // console.log(SectionActive);
        // setShowActive(SectionActive);
        // const pepe = showActive.map(item => item)   
        // console.log(pepe) 
    }

    const handleSectionCompleted = (e) => {
        setFilter('Completed');
        // const SectionCompleted =  items.filter(item => item.Checked)
        // console.log(SectionCompleted);
        // setShowCompleted(SectionCompleted);
    }

    const handleSectionAll = (e) => {
        setFilter('All');
    }

    return(
        <>
            <Stack horizontal horizontalAlign="center">
                <Pivot onLinkClick={handleSectionAll}>
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
        </>
    )
}