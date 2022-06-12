import { Stack, StackProps, Text } from "@chakra-ui/layout"
import * as React from "react"
import { Heading } from "../../typography/heading"

interface HeadingGroupProps extends StackProps {
  title: string
  description: string
  mail: string
}

export const HeadingGroup = (props: HeadingGroupProps) => {
  const { title, mail, description, ...stackProps } = props
  return (
    <Stack spacing="1" {...stackProps}>
      <Heading as="h3" size="lg" fontWeight="semibold">
        {title}
      </Heading>
      <Text color="black">
        {description} <Text as="a" href={`mailto:${mail}`} color="red" fontWeight="bold" _hover={{color: "black"}}>{mail}</Text>
      </Text>
    </Stack>
  )
}
