import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ContactForm } from "./footer-form/form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => (
  <Box as="footer" py={16} role="contentinfo" bg="blackAlpha.50" id="contact">
    <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "3rem", lg: "3rem" }}
        mt="8"
        // align={{ lg: "center" }}
        justify="space-between"
        alignItems="center"
      >
        <Box flex={{base: 3, md: 4}} w="full">
          <ContactForm />
        </Box>
        <Box flex={{base: 3}}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb="3">
            Quick Links
          </Heading>
          <Stack spacing="3" shouldWrapChildren>
          <Button as="a" variant="link" color="red" _hover={{color: "black"}} href="/services/headless-wordpress-development-services">Headless Wordpress Solution</Button>
            <Button variant="link" color="red" _hover={{color: "black"}}>Privacy Policy</Button>
            <Button variant="link" color="red" _hover={{color: "black"}}>Terms &amp; Condition</Button>
            <Button variant="link" color="red" _hover={{color: "black"}}>Return Policy</Button>
          </Stack>
          <Stack justify="space-between" direction="row" align="center" py="5">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                bg="black"
                _hover={{ bg: "red" }}
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" color="white" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                bg="black"
                _hover={{ bg: "red" }}
                icon={<FaGithub fontSize="1.25rem" color="white" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                bg="black"
                _hover={{ bg: "red" }}
                icon={<FaTwitter fontSize="1.25rem" color="white" />}
              />
            </ButtonGroup>
          </Stack>
          <Text size="10px">
            &copy; {new Date().getFullYear()} by codeheadless.com. All rights
            reserved. Offering high performant headless wordpress, headless cms and React, typescript frontend services
          </Text>
        </Box>
      </Stack>
    </Box>
  </Box>
);
