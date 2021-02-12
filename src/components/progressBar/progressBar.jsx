import React from 'react';
import progressBarStyle from './progressBarStyle.module.scss';

const ProgressBar = ({className, value, ...classes}) => {

    const progressBarClass = Object.entries(classes).map(([key, value]) =>
        progressBarStyle[key] !== undefined ? progressBarStyle[key] : '').join(' ')

    return(
        <div className={progressBarStyle.container + ' ' + (className ? className : '')}>
            <div className={progressBarClass + ' ' + progressBarStyle.filled} style={{width: `${value}%`}}/>
        </div>
    )

}

export default ProgressBar;