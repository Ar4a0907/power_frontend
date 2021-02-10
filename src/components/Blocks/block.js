import React from 'react';
import blockStyles from './blockStyle.module.scss';

const Block = ({children, className, ...classes}) => {

    const blockClass = Object.entries(classes).map(([key, value]) =>
        blockStyles[key] !== undefined ? blockStyles[key] : '').join(' ') + ' ' + (className ? className : '')
        + ' ' + blockStyles.block;

    return(
        <div className={blockClass}>
            {children}
        </div>
    );
}

export default Block;