import React from 'react';
import badgeStyles from './badgeStyle.module.scss';
import {ReactComponent as DotIcon} from '../../assets/icons/dot.svg';

const Badge = ({className,label,...classes}) => {

    const badgeClass = Object.entries(classes).map(([key, value]) =>
    badgeStyles[key] !== undefined ? badgeStyles[key] : '').join(' ') + ' ' + (className ? className : '')

    console.log(badgeClass)

    return (
        <span className={`${badgeClass} ${badgeStyles['badge']}`}>
            <DotIcon className={badgeStyles['dotIcon']} />
            {label}
        </span>
    );
}

export default Badge;