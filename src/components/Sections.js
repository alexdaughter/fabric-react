import React, { useState, useContext } from 'react';
import { Pivot, PivotItem, Stack } from 'office-ui-fabric-react/';
import { Context } from './Context';

export default function Sections ({ item }) {
    
    const {items, setItems, showCompleted, showActive, setShowCompleted, setShowActive} = useContext(Context);

    const handleSectionActive = (e) => {
        const SectionActive = items.filter(item => !item.Active)
        console.log(SectionActive);
         setShowActive([SectionActive]);
    }

    const handleSectionCompleted = (e) => {
        const SectionCompleted = items.filter(item => item.Active)
        console.log(SectionCompleted);
         setShowCompleted([SectionCompleted]);
    }

    return(
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
                headerButtonProps={{
                'data-order': 1,
                'data-title': 'Active Title'
                }}>
                </PivotItem>
            </Pivot>
            <Pivot onLinkClick={handleSectionCompleted}>
                <PivotItem
                headerText="Completed"
                headerButtonProps={{
                'data-order': 1,
                'data-title': 'Completed Title'
                }}>
                </PivotItem>
            </Pivot>
        </Stack>
    )
}