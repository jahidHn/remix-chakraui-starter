import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import * as React from 'react'

interface Props extends BoxProps {
  name: string
  jobTitle: string
  imageSrc: string
  blockTitle: string
}

export const Author = (props: Props) => {
  const { name, jobTitle,blockTitle, imageSrc, ...boxProps } = props
  return (
    <Box {...boxProps}>
       <Heading as ="h3" textAlign="center" mb="2">{blockTitle}</Heading>
      <Image src={imageSrc} objectFit="cover" width="100" height="100" style={{borderRadius: '50%'}} alt="Headless Wordpress &amp; CMS Developer" />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}