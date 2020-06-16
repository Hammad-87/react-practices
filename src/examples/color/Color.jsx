import React,{cloneElement,Children,isValidElement} from 'react';

const color = "green";
function Color(props) {
    return Children.map(props.children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                color
            });
        }
        return child;
    })
}

export default Color;