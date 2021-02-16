import React from 'react';
import Button from '../components/button/button';
import testStyle from './testScreenStyle.module.scss';
import InputSearch from '../components/inputSearch/inputSearch';

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
                <div>
                    <InputSearch small />
                    <br/>
                    <InputSearch big />
                </div>
            </body>
        </div>
    );
  }
  
  export default testScreen;