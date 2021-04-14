import React from 'react';
import sideNavStyle from './SideNavStyles.module.scss';
import cashImage from './cashImage.svg';
import cloudImage from './cloudImage.svg';
import cloudCashImage from './cloudCashImage.svg';
import { Icon } from '../';
import { NavLink }  from 'react-router-dom';
import { history } from '../../_library/history';


export const SideNav = ({ menuComponents }) => {

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
                {menuComponents.map( (element, idx) => (
                    <NavLink key={idx} className={sideNavStyle.sideNavLink} to={element.link} onClick={() => history.push(element.link)} activeClassName={sideNavStyle.sideNavLinkActive}>
                        <Icon type={element.iconType} className={sideNavStyle.icon} />
                        <span>{element.label}</span>
                    </NavLink>
                ))}
            </div>
            <div className={sideNavStyle.sideNavFooter}>
                <img src={cloudCashImage} className={sideNavStyle.cloudCash} alt="Cloud Cash"/>
                <p className={sideNavStyle.slogan}>
                    Give your money awesome space in cloud
                </p>
                <button className={sideNavStyle.premiumUpgrade} onClick={handleClick}><span>Upgrade to premium</span></button>
            </div>
        </div>
    )
}