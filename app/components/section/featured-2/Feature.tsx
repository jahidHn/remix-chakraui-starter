import { Center, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface FeatureProps {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Stack direction="row" w="100%" spacing="6">
      <Center aria-hidden flexShrink={0} w="20" h="20" rounded="md" color="white" bg="red">
        {icon}
      </Center>
      <Stack>
        <Text as="h3" fontSize="xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" fontSize="lg">
          {children}
        </Text>
      </Stack>
    </Stack>
  )
}
