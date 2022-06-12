import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaCopy, FaPlug, FaRecycle } from "react-icons/fa";
import {
  GiCoolSpices,
  GiDatabase,
  GiRocket,
  GiShieldBounces,
} from "react-icons/gi";
import { SiGooglecolab } from "react-icons/si";
import { Feature } from "./Feature";

export const FeaturedTwo = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} py="32">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box
          textAlign="center"
          mx="auto"
          mb="20"
          maxW={{ base: "xl", md: "3xl" }}
        >
          <Heading size="2xl" fontWeight="extrabold" as="h2">
            How JAMstack maximize your business values
          </Heading>
          <Text as="h3" mt="4" fontSize="xl" fontWeight="light">
            Welcome SSR(server side rendering) and SSG(static site generation)
            for SEO &amp; Performance.{" "}
          </Text>
        </Box>

        <Box mt="24">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "16", md: "8" }}
          >
            <Stack spacing="12" maxW="lg">
              <Feature
                icon={
                  <Box as={GiRocket} w="12" h="12" transform="rotate(180deg)" />
                }
                title="Static &amp; Fast"
              >
                We use NextJs as a full-stack development framework for SSG and
                SSR support. We use serverless technology, so not time-consuming
                for multiple queries and static files help to generate 10x
                faster sites and SERP as well
              </Feature>
              <Feature
                icon={<Box as={GiShieldBounces} w="12" h="12" color="#fff" />}
                title="Secured &amp; Integrated Experiences"
              >
                There is no direct connection to database with the frontend.
                Also, Business owners don&apos;t need to use extra modules,
                plguins for the frontend So, Keep everything clean and get
                smooth user experiences.
              </Feature>
              <Feature
                icon={<Box as={GiDatabase} w="12" h="12" />}
                title="Third-party &amp; Multi channel capabilities"
              >
                Use multiple channels, databases, and analytics for a single
                site without affecting the frontend.
              </Feature>
            </Stack>

            <Stack spacing="12" maxW="lg" justifyContent="center">
              <Feature
                icon={<Box as={GiCoolSpices} w="12" h="12" />}
                title="Stable &amp; Accessible"
              >
                Fronted codes are optimized and bundled through webpack. There
                is no way to inject codes, malware or something from the
                dashboard to frontend. Keep everything stable and highly
                accessible for the end user
              </Feature>
              <Feature
                icon={<Box as={SiGooglecolab} w="12" h="12" />}
                title="High Scoring Core Web Vital "
              >
                We care about Google core web vitals score to understand
                user&apos;s experiences while using your websites &amp; web
                applications
              </Feature>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
