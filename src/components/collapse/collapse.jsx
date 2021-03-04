import React, { useState } from 'react';
import collapseStyle from './collapseStyle.module.scss';
import Icon from '../icons/icons';

const Collapse = ({label, content, className}) => {

    const [shown, setShown] = useState(false);

    const handleClick = () => {
            setShown(!shown);
    };

    return (
        <div onClick={handleClick} className={collapseStyle.collapseContainer}>
            <div className={collapseStyle.collapseLabel + ' ' + className} onClick={handleClick}>
                <div className={collapseStyle.label}><span>{label}</span></div>
                {shown ?
                    <Icon type='upArrow' className={collapseStyle.arrow}/> :
                    <Icon type='downArrow' className={collapseStyle.arrow}/>
                }
            </div>
            <div className={(shown ? collapseStyle.opened : collapseStyle.closed) +
            ' ' + collapseStyle.contentContainer}>
                {content}
            </div>
        </div>
    )
};

export default Collapse;