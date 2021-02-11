import Text from '../components/Text/text.jsx'

function TestScreen() {
  return (
    <div >
      <header >
      </header>
      <body>
        <Text h1><span>H1 HEAD</span></Text>
        <Text h2><span>H2 Headline</span></Text>
        <Text h3><span>H3 Headline</span></Text>
        <Text h4><span>H4 Headline</span></Text>
        <Text h5 justify>
           <span>H5 Headline</span>
           <span> I`m testing how justify property works i need more text to testing this span correctly</span>
        </Text>
        <Text h6 left><span>H6 Headline</span></Text>
        <Text bodyBig right><span>Body Big</span></Text>
        <Text bodyMedium><span>Body 1</span></Text>
        <Text subtitle><span>Subtitle 2</span></Text>
        <Text button><span>BUTTON</span></Text>
        <Text bodySmall><span>body 2</span></Text>
        <Text caption><span>Caption</span></Text>
        <Text overline><span>OVERLINE</span></Text>
      </body>
    </div>
  );
}

export default TestScreen;