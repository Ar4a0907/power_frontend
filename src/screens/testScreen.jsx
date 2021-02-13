import React from 'react';
import Text from './../components/Text/text'
import testStyle from './testScreenStyle.module.scss';

const testScreen = () => {
    return (
        <div>
            <header >
            </header>
            <body>
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
            </body>
        </div>
    );
  }
  
  export default testScreen;