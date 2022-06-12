import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode, Text } from '@chakra-ui/react'
import * as React from 'react'
import {SiWordpress,SiGatsby,SiNextdotjs,SiTypescript,SiGraphql,SiApollographql, SiStoryblok, SiPrismic, SiContentful, SiStrapi, SiForestry} from "react-icons/si"
export const LogoBox = () => {
  return (
    <Box as="section" py="10" mb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading fontWeight="extrabold" maxW="7xl" mx="auto" textAlign="center" as="h3">
          Technologies we use
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 6 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
          mb="16"
        >
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiWordpress size="50" />
            <Text as="h4" fontSize="sm" fontWeight="semibold">Wordpress</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiStoryblok size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">StoryBlok</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiPrismic size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Prismic</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiContentful size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Contentful</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiForestry size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Forestry</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiStrapi size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Strapi</Text>
          </Center>
        </SimpleGrid>
       
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 5 }}
          mt="-8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiTypescript size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">TypeScript</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGraphql size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">Graphql</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiApollographql size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">ApolloGraphql</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiNextdotjs size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">NextJs</Text>
          </Center>
          <Center py="8" px="8" bg="gray.50" rounded={{ md: 'lg' }} display="flex" flexDirection="column">
            <SiGatsby size="50"/>
            <Text as="h4" fontSize="sm" fontWeight="semibold">GatsbyJs</Text>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
