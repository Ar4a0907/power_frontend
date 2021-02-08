import React from 'react';
import './Button_style.scss';
import Pen from './Pen_svg';


function ButtonMade(props) {
    return(
        <button className={props.Class}>
            {props.Text==='' ?
                <div className={props.Icon}>
                    <Pen/>
                </div>
                : props.Text}
        </button>
    )
}


export default ButtonMade;