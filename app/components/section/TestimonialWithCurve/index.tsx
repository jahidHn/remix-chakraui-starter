import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
interface TestimonialProps {
  author: string;
  role: string;
  colorScheme: string;
  children: React.ReactNode;
}

export const Testimonial = (props: TestimonialProps) => {
  const { children, author, role, colorScheme: c } = props;
  const accentColor = "blackAlpha.900"
  return (
    <Flex
      direction="column"
      rounded={{ md: "lg" }}
      justifyContent="center"
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="center"
        justify="center"
        align="center"
        pt="10"
        pb="6"
        px="10"
        background="linear-gradient(180deg, #f1f1f1 30%,#f7f7f7 70%, #fff)"
        rounded="lg"
      >
        <Box as="blockquote" maxW="340px" mx="auto" my="4" pt="5">
          <Box
            position="absolute"
            top="6"
            left="5"
            display={{ base: "none", md: "inline" }}
            fontSize="3xl"
            color="red"
           
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize="lg">{children}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display={{ base: "none", md: "inline" }}
            fontSize="3xl"
            color="red"
          >
            <ImQuotesRight />
          </Box>
        </Box>
      </Flex>
      <Flex
        direction="column"
        position="relative"
        align="center"
        justify="center"
        color="white"
        px="6"
        pb="8"
      >
        <Box
          position="absolute"
          left="0"
          bottom="0"
          w="full"
          h="full"
          roundedBottom={{ md: "lg" }}
          overflow="hidden"
          _before={{
            content: `''`,
            display: "block",
            position: "absolute",
            bottom: "0",
            left: "-10%",
            width: "120%",
            height: "90%",
            roundedTop: "120%",
            bg: accentColor,
          }}
        />
        {/* <Img
          src={image}
          alt={author}
          rounded="full"
          border="6px solid"
          borderColor={accentColor}
          position="relative"
          mt="-5"
          w="16"
          h="16"
          objectFit="cover"
        /> */}
       
        <Box position="relative" fontSize="sm" mt="3" textAlign="center">
          <Text as="h3" fontWeight="bold" fontSize="md" pt="5">
            {author}
          </Text>
          <Text>{role}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};


