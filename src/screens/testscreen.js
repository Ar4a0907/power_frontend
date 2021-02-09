import Text from "./../components/TextComponent/text.js"

function TestScreen() {
    return (
      <div >
        <header >
        </header>
        <body>
            <Text text="H1 HEAD" Class="h1" />
           <Text text="H2 Headline" Class="h2" />
            <Text text="H3 Headline" Class="h3" />
            <Text text="H4 Headline" Class="h4" />
            <Text text="H5 Headline" Class="h5" />
            <Text text="H6 Headline" Class="h6" />
            <Text text="Body Big" Class="body-big" />
            <Text text="Body 1" Class="body1" />
            <Text text="Subtitle 2" Class="subtitle" />
            <Text text="BUTTON" Class="button" />
            <Text text="body 2" Class="body2" />
            <Text text="Caption" Class="caption" />
            <Text text="OVERLINE" Class="overline" />
        </body>
      </div>
    );
  }
  
  export default TestScreen;