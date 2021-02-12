import React from 'react';
import iconsStyle from './iconsStyle.module.scss';

const Icon = (props) => {

    return (
        <div className={iconsStyle.icon + ' ' + iconsStyle[props.type]}/>
    )
}

export default Icon;