import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import * as React from "react"
import { ContactForm } from "../../blocks/footer-form/form"
interface IntroProps {
  // icon: React.ReactElement
  title: string
  description: string
  // children: React.ReactNode
}
export const Intro = ({title, description}: IntroProps ) => (
  <>
    <Box as="section">
      <Box maxW={{ base: "xl", md: "7xl" }} px={{ base: "6", md: "8" }}
        mx="auto" py="24">
          <Stack direction={{base: "column", md: "row"}} spacing={{base: 0, md: "4"}} alignItems="center">
            <Box w="full" flex="6">
            <Heading as="h1" size="3xl" fontWeight="extrabold" letterSpacing="tight">
          {title}
        </Heading>
        <Text mt="4" fontSize="xl" fontWeight="light">
          {description}
        </Text>
            </Box>
            <Box w="full" flex="6">
              <ContactForm />
            </Box>
          </Stack>
        
      </Box>
    </Box>
  </>
)
