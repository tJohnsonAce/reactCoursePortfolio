import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="white" color="black" borderRadius="10px">
      <Image
        borderRadius="10px"
        src= {imageSrc}
        alt= "project-image"
      />
      <Box padding="16px">
        <Heading paddingBottom="10px">{title}</Heading>
        <Text paddingBottom="10px">{description}</Text> 
        <Text >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>

  );
};

export default Card;