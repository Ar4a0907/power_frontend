import React from 'react';
import textModuleStyle from './text.module.scss';

const text = ({children, className, ...classes}) => {

    const textClass = Object.entries(classes).map(([key]) =>
    textModuleStyle[key] !== undefined ? textModuleStyle[key] : '').join(' ') + ' ' + (className ? className : '')


    return (
        <div className = {textClass}>
            {children}
        </div>
    );
}



export default text;