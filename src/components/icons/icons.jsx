import React , { useState, useEffect } from 'react';

const Icon = ({ type, ...rest }) => {
    const [icon, setIcon] = useState('');
    useEffect( () => {

        async function importIcon() {
            if (type) {
                const importedIcon = await import(`./images/${type}.svg`);
                setIcon(importedIcon.default);
            } else {
                const importedIcon = await import(`./images/questionMark.svg`);
                setIcon(importedIcon.default);
                console.log('Invalid icon type!')
            }
        }

        importIcon();
    }, [type]);

    return (
        <img src={icon} alt={''}/>
    )

};

export default Icon;