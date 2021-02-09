import Text from "./../components/TextComponent/text.js"

function TestScreen() {
    return (
       <div >
        <header >
        </header>
        <body>
            <Text h1><div>H1 HEAD</div></Text>
            <Text h2><div>H2 Headline</div></Text>
            <Text h3><div>H3 Headline</div></Text>
            <Text h4><div>H4 Headline</div></Text>
            <Text h5><div>H5 Headline</div></Text>
            <Text h6><div>H6 Headline</div></Text>
            <Text body_big><div>Body Big</div></Text>
            <Text body1><div>Body 1</div></Text>
            <Text subtitle><div>Subtitle 2</div></Text>
            <Text button><div>BUTTON</div></Text>
            <Text body2><div>body 2</div></Text>
            <Text caption><div>Caption</div></Text>
            <Text overline><div>OVERLINE</div></Text>
        </body>
      </div>
    );
  }
  
  export default TestScreen;