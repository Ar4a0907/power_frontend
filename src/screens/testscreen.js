import React from 'react';
import Block from '../components/Blocks/block';
import testStyle from './testStyle.module.scss';

function handleClick(event) {
    event.preventDefault()
    alert('Click!')
}

function TestScreen() {
    return (
      <div >
        <header >
        </header>
        <body>
            <div className={testStyle.container} onClick={handleClick}>
                <Block big>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias
                        aliquam architecto delectus deleniti et excepturi facere facilis fugit ipsam
                        nemo non officia pariatur perferendis praesentium quibusdam quo, quod ratione
                        saepe sint soluta tempora, ullam veritatis, vero voluptate. Aperiam consequatur
                        eligendi inventore minus nesciunt odit quaerat soluta ullam velit vero.
                    </p>
                </Block>
                <Block medium>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nulla, sequi.
                        Accusantium ad commodi dicta dolore doloribus, enim fugit libero minima neque
                        nulla porro sequi.
                    </p>
                </Block>
                <Block small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, temporibus.</p>
                </Block>
            </div>
        </body>
      </div>
    );
  }
  
  export default TestScreen;