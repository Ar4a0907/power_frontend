import React from 'react';
import sideNavStyle from './sideNavStyles.module.scss';
import cashImage from './cashImage.svg';
import cloudImage from './cloudImage.svg';

const SideNav = (props) => {
    return (
        <div className={sideNavStyle.sideBar}>
            <div className={sideNavStyle.sideNavTitle}>
                <div className={sideNavStyle.titleImage}>
                    <img src={cloudImage} alt="Cloud" className={sideNavStyle.cloud}/>
                    <img src={cashImage} alt="Cash" className={sideNavStyle.cash}/>
                </div>
                <span className={sideNavStyle.title}>
                    cloudcash
                </span>
            </div>
        </div>
    )
}

export default SideNav