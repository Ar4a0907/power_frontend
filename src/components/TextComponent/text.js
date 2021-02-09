import React from 'react';
import txt from "./text.module.scss";
import classNames from "classnames";

const text = ({children,h1,h2,h3,h4,h5,h6,body_big,body1,body2,caption,overline,subtitle,button,left,right,justify}) =>
{
    let txtClass=classNames([txt.text],{
        [txt.h1]: h1, [txt.h2]: h2, [txt.h3]: h3,[txt.h4]: h4,[txt.h5]: h5, [txt.h6]: h6,
        [txt.body_big]: body_big, [txt.body1]: body1,
        [txt.subtitle]: subtitle, [txt.button]: button,
        [txt.body2]: body2,[txt.caption]: caption,
        [txt.overline]: overline,[txt.left]: left,
        [txt.right]: right, [txt.justify]: justify
    });

    return(
            <div className={txtClass}>
                {children}
            </div>
    );
}



export default text;