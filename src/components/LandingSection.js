import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size='xl' name='Pete Piper' src='https://i.pravatar.cc/150?img=7' />{' '}
      <Heading fontSize='xl'>{greeting}</Heading>
      <Text as='h1' fontSize='5xl'>{bio1}</Text>
      <Text fontSize='5xl'>{bio2}</Text>
    </VStack>

    </FullScreenSection>
);

export default LandingSection;
