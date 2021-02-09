import React from 'react';
import ButtonStyles from './Button_style.module.scss';
const ButtonMade = (props) => {
/*{children,Medium,Small,XSmall,White,Blue,Gray,Pen} */
 /*   let ButtonClasses = classNames([ButtonStyles.Button],{
        [ButtonStyles.Medium]:Medium,[ButtonStyles.Small]:Small,[ButtonStyles.XSmall]:XSmall,
        [ButtonStyles.White]:White,[ButtonStyles.Blue]:Blue,[ButtonStyles.Gray]:Gray,[ButtonStyles.Pen]:Pen
    })
*/
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

    console.log(props);

    return(
        <button className={ButtonClass}>
            {props.children}
        </button>
    )
}


export default ButtonMade;