import React from 'react';
import buttonStyles from './buttonStyle.module.scss';


const Button = (props) => {

    const buttonClass = Object.entries(props).map(([key , value]) =>
        buttonStyles[key] !== undefined ? buttonStyles[key] : '').join(' ') + ' ' + (props.className ? props.className : '')
    console.log(buttonClass);

    return (
        <button className = {buttonClass}>
            {props.children}
        </button>
    );

}


export default Button;