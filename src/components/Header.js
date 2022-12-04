import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "tJohnsonAce@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/tJohnsonAce",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/trevor-johnson-91433a1a2/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/whizzkee",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              <a href="tJohnsonAce@outlook.com">
                <FontAwesomeIcon icon="faEnvelope" />
              </a>
              <a href="https://github.com/tJohnsonAce">
                <FontAwesomeIcon icon="faGithub" />
              </a>
              <a href="https://www.linkedin.com/in/trevor-johnson-91433a1a2/">
                <FontAwesomeIcon icon="faLinkedin" />
              </a>
              <a href="https://twitter.com/whizzkee">
                <FontAwesomeIcon icon="faTwitter" />            
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;