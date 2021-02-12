import React from 'react';
import textModuleStyle from './text.module.scss';

const Text = ({children, className, ...classes}) => {

    const textClass = Object.entries(classes).map(([key]) =>
    textModuleStyle[key] !== undefined ? textModuleStyle[key] : '').join(' ') + ' ' + (className ? className : '')


    return (
        <span className = {textClass}>
            {children}
        </span>
    );
}



export default Text;