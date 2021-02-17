import React from 'react';
import { ReactComponent as BlackPenIcon } from '../../assets/icons/blackPen.svg';
import { ReactComponent as BluePenIcon } from '../../assets/icons/bluePen.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as CardsIcon } from '../../assets/icons/cards.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg';
import { ReactComponent as DisabledIcon } from '../../assets/icons/disabled.svg';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/downArrow.svg';
import { ReactComponent as GoalsIcon } from '../../assets/icons/goals.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger.svg';
import { ReactComponent as InovicesIcon } from '../../assets/icons/inovices.svg';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg';
import { ReactComponent as QuestionMarkIcon } from '../../assets/icons/questionMark.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/rightArrow.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as TransactionIcon } from '../../assets/icons/transactions.svg';
import { ReactComponent as TrashCanIcon } from '../../assets/icons/trashCan.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/upArrow.svg';
import { ReactComponent as WhitePenIcon } from '../../assets/icons/whitePen.svg';


const Icon = ({ type, className }) => {
    switch (type) {
        case 'blackPen' :
            return <BlackPenIcon className={className}/>
        case 'bluePen' :
            return <BluePenIcon className={className}/>
        case 'bookmark' :
            return <BookmarkIcon className={className}/>
        case 'cards' :
            return <CardsIcon className={className}/>
        case 'check' :
            return <CheckIcon className={className}/>
        case 'cross' :
            return <CrossIcon className={className}/>
        case 'disabled' :
            return <DisabledIcon className={className}/>
        case 'downArrow':
            return <DownArrowIcon className={className}/>
        case 'goals':
            return <GoalsIcon className={className}/>
        case 'hamburger' :
            return <HamburgerIcon className={className}/>
        case 'inovices' :
            return <InovicesIcon className={className}/>
        case 'lock' :
            return <LockIcon className={className}/>
        case 'overview' :
            return <OverviewIcon className={className}/>
        case 'rightArrow' :
            return <RightArrowIcon className={className}/>
        case 'settings' :
            return <SettingsIcon className={className}/>
        case 'transactions' :
            return <TransactionIcon className={className}/>
        case 'trashCan' :
            return <TrashCanIcon className={className}/>
        case 'upArrow' :
            return <UpArrowIcon className={className}/>
        case 'whitePen':
            return <WhitePenIcon className={className}/>
        default :
            return <QuestionMarkIcon className={className}/>
    }
};

export default Icon;