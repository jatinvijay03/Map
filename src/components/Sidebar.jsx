import React, { useState } from "react";
import CheckboxTree from 'react-checkbox-tree';
import data from "../data.json";

import 'react-checkbox-tree/lib/react-checkbox-tree.css';





function Widget(props) {

    const [expanded, setExpanded] = useState([]);

    function handleCheck(checked) {
        props.handleCheck(checked)
    }

    function handleExpanded(expanded) {
        setExpanded(expanded);
    }



    return (
        <CheckboxTree

            nodes={data.data}
            checked={props.checked}
            expanded={expanded}
            onCheck={handleCheck}
            onExpand={handleExpanded}
            onlyLeafCheckboxes={true}
            
            icons={{
                check: <i className="fa-regular fa-square-check"></i>,
                uncheck: <span className="rct-icon rct-icon-uncheck" />,
                halfCheck: <span className="rct-icon rct-icon-half-check" />,
                expandClose: <i className="fa-solid fa-square-plus fa-lg"></i>,
                expandOpen: <i className="fa-solid fa-square-minus fa-lg"></i>,
                expandAll: <span className="rct-icon rct-icon-expand-all" />,
                collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                parentClose: <i className="fa-solid fa-layer-group"></i>,
                parentOpen: <i className="fa-solid fa-layer-group"></i>,
                leaf:""
            }}



        />
    );

}

export default Widget;
