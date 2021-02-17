import React, { useState, useEffect } from 'react';
import { ReactComponent as BlackPenIcon } from '../../assets/icons/blackPen.svg';
import { ReactComponent as BluePenIcon } from '../../assets/icons/bluePen.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as CardsIcon} from '../../assets/icons/cards.svg';

const Icon = ({ type, className }) => {

    return (
        <img src={icon} alt={''} className={className}/>
    )
};

export default Icon;