import React, { useState } from 'react';
import collapseStyle from './CollapseStyle.module.scss';
import { Icon } from '../';

export const Collapse = ({label, content, className}) => {

    const [shown, setShown] = useState(false);

    const handleClick = () => {
            setShown(!shown);
    };

    return (
        <div onClick={handleClick}>
            <div className={collapseStyle.collapseLabel + ' ' + className} onClick={handleClick}>
                <div><span>{label}</span></div>
                    <Icon type='upArrow' className={collapseStyle.arrow + ' ' + (shown ? collapseStyle.arrowOpen : collapseStyle.arrowClose)}/> 
            </div>
            <div className={(shown ? collapseStyle.opened : collapseStyle.closed) +
            ' ' + collapseStyle.contentContainer}>
                {content}
            </div>
        </div>
    )
};