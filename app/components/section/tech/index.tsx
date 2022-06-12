import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode, Text } from '@chakra-ui/react'
import * as React from 'react'
import {SiReact, SiDocker, SiJest,SiWebpack,  SiGutenberg,SiWordpress,SiGatsby,SiNextdotjs,SiTypescript,SiGraphql,SiApollographql, SiStoryblok, SiPrismic, SiContentful, SiStrapi,SiHasura} from "react-icons/si"
export const Tech = () => {
  return (
    <Box as="section" py="20">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading fontWeight="extrabold" maxW="7xl" mx="auto" textAlign="center" as="h3">
            Technologies we use for Headless WordPress Development 
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
          mb="16"
        >
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiWordpress size="50" />
            <Text as="h4" fontSize="sm" fontWeight="semibold">Wordpress</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGutenberg size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Gutenberg</Text>
          </Center>
         
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGraphql size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">WpGraphql</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiHasura size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Hasura</Text>
          </Center>
          
        </SimpleGrid>
        <Heading fontWeight="extrabold" maxW="5xl" mx="auto" textAlign="center">
          Frontend Framework &amp; Technologies 
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 3 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
          mb="16"
        >
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiReact size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">React</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiNextdotjs size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">NextJs</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGatsby size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">GatsbyJs</Text>
          </Center>
        </SimpleGrid>
        <Heading fontWeight="extrabold" maxW="5xl" mx="auto" textAlign="center">
          Query, Pattern and Development Tools 
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 3, md: 6 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
            
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiTypescript size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">TypeScript</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGraphql size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Graphql</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiApollographql size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">ApolloGraphql</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiDocker size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Docker</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiJest size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Jest for testing</Text>
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiWebpack size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Webpack</Text>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
