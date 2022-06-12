import { Box, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface Props {
  label: string
  value: string
}
export const Stat = (props: Props) => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="black"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      textAlign="center"
      {...boxProps}
    >
      <Stack>
        <Text fontSize="lg" fontWeight="bold">
          {label}
        </Text>
        <Text as="h3" size={useBreakpointValue({ base: 'md', md: 'md' })} color="red" fontSize="4xl" fontWeight="extrabold">{value}</Text>
      </Stack>
    </Box>
  )
}