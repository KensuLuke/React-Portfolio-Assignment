import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="white" color="black" borderRadius="lg" spacing={3}>
      <HStack spacing={3}>
        <VStack>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={imageSrc}
            alt={title}
            borderRadius="lg"
          />
          <Box p={4}>
            <Heading mb={3} size="lg">
              {title}
            </Heading>
            <Text mb={3}>{description}</Text>
            <Link color="teal.500" href="#">
              See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Link>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Card;
