import React, {useState} from 'react';
import checkBoxStyle from './checkBoxStyle.module.scss';

const CheckBox = (props) => {

    const [check, setCheck] = useState(props.checked)

    const handleChange = () => {
        setCheck(!check)
        if (props.onChange) {
            props.onChange(!check);
        }
    }

    return (
        <label className={checkBoxStyle.container}>
            <input type="checkbox" checked={check} onChange={handleChange}/>
            <span className={checkBoxStyle.checkmark}></span>
        </label>
    )

}

export default CheckBox;