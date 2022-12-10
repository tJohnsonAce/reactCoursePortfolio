import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import logo from '../images/sitePFP2.jpg'

const greeting = "Hello, I'm Trevor!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack alignItems="center">
        <Avatar src={logo} alt="logo" size={80}/>  
      <Heading id="greeting">{greeting}</Heading>
      <Heading id="bio" textAlign="center">{bio1}<br />{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
