import React from 'react';
import ButtonMade from "../components/button/button";
import './testscren_style.scss';


function TestScreen() {
    return (
        <div>
            <header >
            </header>
            <body>
                <div className="Button--Test">
                    <div className="Button--Test-Row">
                        <ButtonMade Medium Gray><div>Button M</div></ButtonMade>
                        <ButtonMade Medium Blue><div>Button M</div></ButtonMade>
                        <ButtonMade Medium White><div>Button M</div></ButtonMade>
                        <ButtonMade Medium Continue><div>Continue</div></ButtonMade>
                    </div>
                    <div className="Button--Test-Row">
                        <ButtonMade Small Gray><div>Button S</div></ButtonMade>
                        <ButtonMade Small Blue><div>Button S</div></ButtonMade>
                        <ButtonMade Small White><div>Button S</div></ButtonMade>
                        <ButtonMade Small Bookmark><div>Bookmark</div></ButtonMade>
                    </div>
                    <div className="Button--Test-Row">
                        <ButtonMade XSmall Gray><div>XSmall</div></ButtonMade>
                        <ButtonMade XSmall Blue><div>XSmall</div></ButtonMade>
                        <ButtonMade XSmall White><div>XSmall</div></ButtonMade>
                        <ButtonMade Small Delete><div>Delete</div></ButtonMade>
                    </div>
                    <div className="Button--Test-Row">
                        <ButtonMade Pen Gray/>
                        <ButtonMade Pen Blue/>
                        <ButtonMade Pen White/>
                        <ButtonMade Hamburger/>
                    </div>
                </div>
            </body>
        </div>
    );
  }
  
  export default TestScreen;