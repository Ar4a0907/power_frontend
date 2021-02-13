import React from 'react';
import textModuleStyle from './text.module.scss';

const Text = ({children, className,type, ...classes}) => {

    const textClass = Object.entries(classes).map(([key]) =>
    textModuleStyle[key] !== undefined ? textModuleStyle[key] : '').join(' ') + ' ' + (className ? className : '');

    const ComponentType = (['justify','right','left'].some(substring => textClass.includes(substring))) ? 'div' : 'span';

    return (
        <ComponentType className = {textClass}>
            {children}
        </ComponentType>
    );
}



export default Text;