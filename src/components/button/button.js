import React from 'react';
import ButtonStyles from './Button_style.module.scss';


const ButtonMade = (props) => {

    let Class = Object.entries(props).map(([key,value]) =>{
        if(value===true){
            return key
        }
        return null;
    })

    let ButtonClass = `${ButtonStyles.Button} ` ;
    for (let index = 0; index < Class.length; index++) {
        ButtonClass += (ButtonStyles[Class[index]] + ' ');
    }

    return (
        <button className={ButtonClass}>
            {props.children}
        </button>
    );

}


export default ButtonMade;