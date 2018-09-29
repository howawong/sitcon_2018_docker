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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
             Deploying web application with Docker
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Ho Wa Wong, howa (dot) wong (at) gmail (dot) com
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Agenda</Heading>
          <Heading size={6} textColor="secondary">Introduction to Docker</Heading>
          <Heading size={6} textColor="secondary">Building a Docker image</Heading>
          <Heading size={6} textColor="secondary">Running a Docker container locally</Heading>
          <Heading size={6} textColor="secondary">Mimimize image size</Heading>
          <Heading size={6} textColor="secondary">Deploying to heroku</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>About myself</Heading>
          <List>
            <ListItem>Python Developer</ListItem>
            <ListItem>Open Data Advocate</ListItem>
            <ListItem>Focus on data and backend</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Docker Introduction</Quote>
          </BlockQuote>
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
		  <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/Dockerfile.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide>
          <Code>
	 		docker build -t sitcon .
	      </Code>
        </Slide>
        <Slide>
           Nothing happens ?!
           Of course, we need to run the container!
        </Slide>
      </Deck>
    );
  }
}
