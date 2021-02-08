import React from 'react';
import "./text.scss";

const text = (props) =>
{
    return(
            <div className={`${props.Class} text`}>
                {props.text}
            </div>
    );
}


export default text;