// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  logo: require('../assets/Docker-logo.png'),
  me: require('../assets/profile.jpg'),
  success: require('../assets/success.png'),
  heroku: require('../assets/heroku-card.png'),
  hack: require('../assets/g0vhkhack.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="quaternary">
             Deploying web application with Docker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" textSize={28}  bold>
            SITCON x HK 2018
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={14}  bold>
            Ho Wa Wong, howa.wong@gmail.com
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Agenda</Heading>
          <List>
          <ListItem size={6} textColor="secondary">Introduction to Docker</ListItem>
          <ListItem size={6} textColor="secondary">Building a Docker image</ListItem>
          <ListItem size={6} textColor="secondary">Running a Docker container locally</ListItem>
          <ListItem size={6} textColor="secondary">Mimimize image size</ListItem>
          <ListItem size={6} textColor="secondary">Deploying to heroku</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>About myself</Heading>
          <div style={{}}>
          <div style={{float:'left', width: '80%'}}>
          <List>
            <ListItem>Python Developer</ListItem>
            <ListItem>Open Data Advocate</ListItem>
            <ListItem>Focus on data and backend</ListItem>
          </List>
          </div>
          <div style={{float:'left', width: '20%'}}>
          <Image src={images.me}/>
          </div>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Docker Introduction</Quote>
          </BlockQuote>
          <Image src={images.logo} width={500}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What is a container?</Heading>
          <List>
            <ListItem>A set of processes which are isolated from OS</ListItem>
            <ListItem>But isolated CPU, memory, file system etc</ListItem>
            <ListItem>Different from VM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Container Image</Heading>
          <List>
            <ListItem>Lightweight, standalone, executable package</ListItem>
            <ListItem>It has application code / program, system libraries and configuration</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Installation</Heading>
          <List>
            <ListItem>Go to https://docs.docker.com/install/</ListItem>
            <ListItem>(Windows user might need to install VirtualBox or Hyper-V)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Coding Time</Quote>
            <br/> Let's write the very first Dockerfile
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="white">Dockerfile</Text>
		  <CodePane
            textSize={28}
            lang="jsx"
            source={require('raw-loader!../example/Dockerfile')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} lineHeight={1} textColor="quaternary">
             Now, let's build the very first image
          </Heading><br/>
          <Code textColor="primary">
	 		docker build -t sitcon .
          </Code>
        </Slide>
        <Slide>
           Nothing happens ?!
           Of course, we need to run the container!
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} lineHeight={1} textColor="quaternary">
            And run a container
          </Heading><br/>
          <Code textColor="primary">
            docker run -it -p 8000:3000 --rm hello
          </Code>
        </Slide>
        
        <Slide bgColor="tertiary" textColor="primary">
          <Image src={images.success} />
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6} lineHeight={1} textColor="quaternary">
            Publishing your docker image with heroku
          </Heading><br/>
          <Image src={images.heroku}/>
        </Slide>
         <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6} lineHeight={1} textColor="quaternary">
             Install heroku command line
          </Heading><br/>
          <div>
          <Code textColor="primary">
            brew install heroku/brew/heroku
          </Code>
          </div>
          <br/>And then login<br/><br/>
          <Code textColor="primary">
            heroku login
          </Code>

        </Slide>
          <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6} lineHeight={1} textColor="quaternary">
            Push & Release !
          </Heading><br/>
          <div>
          Pushing image to repository<br/><br/>
          <Code textColor="primary">
             heroku container:push -a sitcon2018 web
          </Code>
          </div>
          <br/>And deploying the image<br/><br/>
          <Code textColor="primary">
            heroku container:release -a sitcon2018 web
          </Code>

        </Slide>
        <Slide>
          <Text textColor="secondary">
            <a href="https://bit.ly/g0vhk2ndhack">https://bit.ly/g0vhk2ndhack</a>
          </Text>
          <Image src={images.hack} />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="primary">
            Done ! Question ?
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
