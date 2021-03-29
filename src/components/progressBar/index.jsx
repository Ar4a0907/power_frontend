import React from 'react';
import progressBarStyle from './ProgressBarStyle.module.scss';

export const ProgressBar = ({className, value, ...classes}) => {

    const progressBarClass = Object.entries(classes).map(([key, value]) =>
        progressBarStyle[key] !== undefined ? progressBarStyle[key] : '').join(' ')

    return(
        <div className={progressBarStyle.container + ' ' + (className ? className : '')}>
            <div className={progressBarClass + ' ' + progressBarStyle.filled} style={{width: `${value}%`}}/>
        </div>
    )

}