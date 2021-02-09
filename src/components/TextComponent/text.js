import React from 'react';
import txt from "./text.module.scss";

const text = (props) =>
{
    return(
            <div className={`${txt[props.Class]} ${txt.text}`}>
                {props.text}
            </div>
    );
}


export default text;