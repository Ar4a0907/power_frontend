import React from 'react';
import Button from '../components/button/button';
import './testScreenStyle.scss';


function TestScreen() {
    return (
        <div>
            <header >
            </header>
            <body>
                <div className="Button--Test">
                    <div className="Button--Test-Row">
                        <Button Medium Gray><div>Button M</div></Button>
                        <Button Medium Blue><div>Button M</div></Button>
                        <Button Medium White><div>Button M</div></Button>
                        <Button Medium Continue><div>Continue</div></Button>
                    </div>
                    <div className="Button--Test-Row">
                        <Button Small Gray><div>Button S</div></Button>
                        <Button Small Blue><div>Button S</div></Button>
                        <Button Small White><div>Button S</div></Button>
                        <Button Small Bookmark><div>Bookmark</div></Button>
                    </div>
                    <div className="Button--Test-Row">
                        <Button XSmall Gray><div>XSmall</div></Button>
                        <Button XSmall Blue><div>XSmall</div></Button>
                        <Button XSmall White><div>XSmall</div></Button>
                        <Button Small Delete><div>Delete</div></Button>
                    </div>
                    <div className="Button--Test-Row">
                        <Button Pen Gray/>
                        <Button Pen Blue/>
                        <Button Pen White/>
                        <Button Hamburger/>
                    </div>
                </div>
            </body>
        </div>
    );
  }
  
  export default TestScreen;