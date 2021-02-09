import React from 'react';
import TextModuleStyle from "./text.module.scss";

const text = (props) => {

    let myClass = Object.entries(props).map(([key, value]) => {
        if (value === true) {
            return key
        }
        return null;
    })

    let textClass = `${TextModuleStyle.text} `;
    for (let index = 0; index < myClass.length; index++) {
        textClass += (TextModuleStyle[myClass[index]] + ' ');
    }

    return (
        <div className={textClass}>
            {props.children}
        </div>
    );
}



export default text;