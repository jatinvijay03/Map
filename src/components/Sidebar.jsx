import React , { useState } from "react";
import CheckboxTree from 'react-checkbox-tree';
import data from "../data.json";


function Widget(props){
    
    const [expanded, setExpanded] = useState([]);

    function handleCheck(checked){
        props.handleCheck(checked)
    }

    function handleExpanded(expanded){
        setExpanded(expanded);
    }


    
        return (
            <CheckboxTree
                nodes={data.data}
                checked={props.checked}
                expanded={expanded}
                onCheck={handleCheck}
                onExpand={handleExpanded}
                onlyLeafCheckboxes = {true}
                
            />
        );
    
}

export default Widget;
