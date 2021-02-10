import React from 'react';
import buttonStyles from './buttonStyle.module.scss';


const Button = ({children, ...classes}) => {

    const buttonClass = Object.entries(classes).map(([key , value]) =>
        buttonStyles[key] !== undefined ? buttonStyles[key] : ``).join(' ')

    return (
        <button className = {buttonClass}>
            {children}
        </button>
    );

}


export default Button;