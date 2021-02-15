import React from 'react';
import Button from '../components/button/button';
import testStyle from './testScreenStyle.module.scss';
import Block from '../components/Blocks/block';
import ProgressBar from '../components/progressBar/progressBar';
import CheckBox from "../components/checkBox/checkBox";
import Icon from '../components/icons/icons';

const handleClick = (event) => {
    event.preventDefault();
    console.log('Click!');
}

const hamburger = (event) => {
    event.preventDefault();
    alert('Hamburger!');
}

const testScreen = () => {
    return (
        <div>
            <header >
            </header>
            <body>
                <div className={testStyle.test}>
                    <div className={testStyle.testRow}>
                        <Button onClick={handleClick} medium gray className={testStyle['sampleClass']}><div>Button M</div></Button>
                        <Button medium blue><div>Button M</div></Button>
                        <Button medium white><div>Button M</div></Button>
                        <Button medium continue><div>Continue</div></Button>
                    </div>
                    <div className={testStyle.testRow}>
                        <Button small gray><div>Button S</div></Button>
                        <Button small blue><div>Button S</div></Button>
                        <Button small white><div>Button S</div></Button>
                        <Button small bookmark><div>Bookmark</div></Button>
                    </div>
                    <div className={testStyle.testRow}>
                        <Button xSmall gray><div>XSmall</div></Button>
                        <Button xSmall blue><div>XSmall</div></Button>
                        <Button xSmall white><div>XSmall</div></Button>
                        <Button small delete><div>Delete</div></Button>
                    </div>
                    <div className={testStyle.testRow}>
                        <Button pen gray/>
                        <Button pen blue/>
                        <Button pen white/>
                        <Button hamburger onClick={hamburger}/>
                    </div>
                </div>
                <Block big>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut corporis excepturi minima nihil, quibusdam reiciendis? In iusto placeat quidem. Adipisci assumenda autem eveniet fugiat molestias non, perspiciatis quo!</Block>
                <ProgressBar value={30} danger className={testStyle.progressBarTest}/>
                <ProgressBar value={20} className={testStyle.progressBarTest}/>
                <ProgressBar value={40} success className={testStyle.progressBarTest}/>
                <ProgressBar value={55}/>
                <div className={testStyle.test}>
                    <div className={testStyle.testRow}>
                        <CheckBox onChange={() => console.log('Checkbox changed')}/>
                        <CheckBox checked={true} onChange={() => console.log('Checkbox changed')}/>
                    </div>
                </div>
                <div className={testStyle.testRow + ' ' + testStyle.notVisible}>
                    <Icon type="cardsSelected"/>
                    <Icon type="cards"/>
                    <Icon type="goalsSelected"/>
                    <Icon type="goals"/>
                    <Icon type="inovicesSelected"/>
                    <Icon type="inovices"/>
                    <Icon type="overviewSelected"/>
                    <Icon type="overview"/>
                    <Icon type="settingsSelected"/>
                    <Icon type="settings"/>
                    <Icon type="transactionsSelected"/>
                    <Icon type="transactions"/>
                    <Icon type="bookmark"/>
                    <Icon type="check"/>
                    <Icon type="cross"/>
                    <Icon type="disabled"/>
                    <Icon type="downArrow"/>
                    <Icon type="hamburger"/>
                    <Icon type="lock"/>
                    <Icon type="rightArrow"/>
                    <Icon type="trashCan"/>
                    <Icon type="upArrow"/>
                    <Icon type="whitePen"/>
                    <Icon type="blackPen"/>
                    <Icon type="bluePen"/>
                </div>
            </body>
        </div>
    );
  }
  
  export default testScreen;