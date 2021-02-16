import React, { useState, useEffect } from 'react';

const Icon = ({ type, className }) => {

    const [icon, setIcon] = useState('');

    useEffect(() => {
        const importIcon = async () => {
            if (type) {
                const importedIcon = await import(`../../assets/icons/${type}.svg`);
                setIcon(importedIcon.default);
            } else {
                const importedIcon = await import(`../../assets/icons/questionMark.svg`);
                setIcon(importedIcon.default);
                console.error('Invalid icon type!')
            }
        }
        importIcon();
    }, [type]);

    return (
        <img src={icon} alt={''} className={className}/>
    )
};

export default Icon;