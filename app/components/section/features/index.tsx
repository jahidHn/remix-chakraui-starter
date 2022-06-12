import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFileSignature, FaHandsHelping, FaHeadset } from 'react-icons/fa'
import { Feature } from './Feature'

export const Features = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} py="20">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack spacing={{ base: '4', lg: '20' }} direction={{ base: 'column', lg: 'row' }}>
          <Center flex="1" shadow="lg" minH="26rem" maxW={{ lg: 'xl' }}>
            <Img
              objectFit="cover"
              w="full"
              h="full"
              htmlWidth="576px"
              htmlHeight="420px"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Bring team together"
            />
          </Center>
          <Box maxW={{ lg: 'xl' }}>
            <Heading
              size="2xl"
              mt="10"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
              as="h2"
            >
              Offering the best key benefits of Headless Wordpress
            </Heading>
            <Text fontSize="lg" mt="6" color={mode('gray.900', 'gray.400')}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </Text>
          </Box>
        </Stack>
        <Divider my="20" opacity={1} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: '12', md: '8' }}>
          <Feature title="Own Database &amp; Free forever" icon={<FaFileSignature />}>
            Unlike other headless cms like contentful, prismic, storyblok, etc, you have limitation using data. 
          </Feature>
          <Feature title="Multichannel &amp; Third-party integration " icon={<FaHeadset />}>
            Legacy or Traditional wordpress offers poor performance when working with third party database. Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="All Static &amp; Fast" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Always Security Pass" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Optimized &amp; Web core Vital Compliants" icon={<FaFileSignature />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Like Gutenberg?" icon={<FaHeadset />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Works with ACF &amp; Flexible Content too" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Algolia Search" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Gravity Form, Sendgrid" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Future-Proof Tech Stack" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
