import React , { useState } from "react";
import CheckboxTree from 'react-checkbox-tree';
import data from "../data.json";


function Widget(){
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);

    function handleCheck(checked){

        setChecked(checked);
        console.log(checked);
        


    }

    function handleExpanded(expanded){
        setExpanded(expanded);
    }


    
        return (
            <CheckboxTree
                nodes={data.data}
                checked={checked}
                expanded={expanded}
                onCheck={handleCheck}
                onExpand={handleExpanded}
                onlyLeafCheckboxes = {true}
                
            />
        );
    
}

export default Widget;
