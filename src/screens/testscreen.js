import React from 'react';
import ButtonMade from "../components/button/button";
import './testscren_style.scss';

function TestScreen() {
    return (
      <div >
        <header >
        </header>
        <body>
            <div className="Button--Test">
                <div className="Button--Test-Row">
                    <ButtonMade Text='Button M' Class='Button Medium Gray'/>
                    <ButtonMade Text='Button M' Class='Button Medium Blue'/>
                    <ButtonMade Text='Button M' Class='Button Medium White'/>
                </div>
                <div className="Button--Test-Row">
                    <ButtonMade Text='Button S' Class='Button Small Gray'/>
                    <ButtonMade Text='Button S' Class='Button Small Blue'/>
                    <ButtonMade Text='Button S' Class='Button Small White'/>
                </div>
                <div className="Button--Test-Row">
                    <ButtonMade Text='XSmall' Class='Button XSmall Gray'/>
                    <ButtonMade Text='XSmall' Class='Button XSmall Blue'/>
                    <ButtonMade Text='XSmall' Class='Button XSmall White'/>
                </div>
                <div className="Button--Test-Row">
                    <ButtonMade Text='' Class='Button Gray' Icon='Pen'/>
                    <ButtonMade Text='' Class='Button Blue' Icon='Pen'/>
                    <ButtonMade Text='' Class='Button White' Icon='Pen'/>
                </div>
            </div>
        </body>
      </div>
    );
  }
  
  export default TestScreen;