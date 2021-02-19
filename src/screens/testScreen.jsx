import React from 'react';
import Button from '../components/button/button';
import testStyle from './testScreenStyle.module.scss';
import Block from '../components/Blocks/block';
import ProgressBar from '../components/progressBar/progressBar';
import CheckBox from "../components/checkBox/checkBox";
import Text from './../components/Text/text';
import RadioButton from "../components/radioButton/radioButton";
import Icon from "../components/icons/icons";
import InputDesktop from '../components/InputDesktop/InputDesktop';


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
            <div>
                <Text h1>H1 HEAD</Text>
                <Text h2>H2 Headline</Text>
                <Text h3>H3 Headline</Text>
                <Text h4>H4 Headline</Text>
                <Text h5>H5 Headline</Text>
                <Text h6 right>H6 Headline</Text>
                <Text bodyBig justify>Body big</Text>
                <Text bodyMain left>Body 1</Text>
                <Text subtitle>Subtitle</Text>
                <Text button>BUTTON</Text>
                <Text bodySmall>Body 2</Text>
                <Text caption>Caption</Text>
                <Text overline>OVERLINE</Text>
            </div>
            <RadioButton checked={1} items={['some.label.id', 'some.label.id2', 'some.label.id3', 'some.label.id4', 'some.label.id5']} />
            <RadioButton checked={0} items={['1', '2', '3', '4', '5']} onChange={() => console.log('RadioButton changed')}/>
            <div className={testStyle.testRow + ' ' + testStyle.notVisible}>
                <Icon type="cards" className={testStyle.testIcon}/>
                <Icon type="goals"/>
                <Icon type="inovices"/>
                <Icon type="overview"/>
                <Icon type="settings"/>
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
                <Icon />
            </div>
            <div>
                    <InputDesktop  placeholder = 'Empty Input' label = 'Cardholder Name' onChange = {(value) => {console.log(value)}}/>
                    <InputDesktop placeholder = 'Empty Input' label = 'Confirmed input' successful onChange = {(value) => {console.log(value)}} />
                </div>
            </body>
        </div>
    );
}

export default testScreen;
