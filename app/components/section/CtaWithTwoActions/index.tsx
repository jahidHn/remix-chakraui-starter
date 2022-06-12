import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
interface ctaProps {
  subText?: string
  colorHeadingOne?: string
  colorHeadingTwo?: string
  content?: string
  buttonText?: string
  buttonLink?: string
  
}

export const CtaAction = ( {subText, colorHeadingOne, colorHeadingTwo, content, buttonText, buttonLink} : ctaProps ) => {
  //const {subText, colorHeadingOne, colorHeadingTwo, content, buttonText, buttonLink } = props
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        textAlign="center"
      >
        <Text fontSize="lg" fontWeight="semibold" color="red">
          {subText}
        </Text>
        <Heading
          my="4"
          as="h2"
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          {colorHeadingOne}
          <Box
            as="mark"
            bg="unset"
            color={useColorModeValue('red', 'blue.200')}
            whiteSpace={{base: 'normal', lg: 'nowrap'}}
          >
            {colorHeadingTwo}
          </Box>
        </Heading>
        <Text fontSize="xl" maxW="3xl" mx="auto" fontWeight="light">
          {content}
        </Text>
        <Button
            as="a"
            href={buttonLink}
            size="lg"
            h="16"
            px="10"
            bg="black"
            color="white"
            _hover={{bg: "red"}}
            fontWeight="bold"
            flex={{ md: '1' }}
            maxW="sm"
            variant="with-corner"
            mt="7"
            whiteSpace="pre-wrap"
          >
            {buttonText}
          </Button>
        
      </Box>
    </Box>
  )
}
