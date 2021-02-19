import React from 'react';
import sideNavStyle from './sideNavStyles.module.scss';
import cashImage from './cashImage.svg';
import cloudImage from './cloudImage.svg';
import cloudCashImage from './cloudCashImage.svg';

const SideNav = (props) => {

    const handleClick = (evt) => {
        evt.preventDefault()
        console.log('Button Clicked!')
    }

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
            <div className={sideNavStyle.sideNavMenu}>

            </div>
            <div className={sideNavStyle.sideNavFooter}>
                <img src={cloudCashImage} className={sideNavStyle.cloudCash} alt="Cloud Cash"/>
                <p className={sideNavStyle.slogan}>
                    Give your money awesome space in cloud
                </p>
                <button className={sideNavStyle.premiumUpgrade} onClick={handleClick}>Upgrade to premium</button>
            </div>
        </div>
    )
}

export default SideNav