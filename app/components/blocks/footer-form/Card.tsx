import { Box, BoxProps } from "@chakra-ui/layout"
export const Card = (props: BoxProps) => (
  <Box
    shadow="base"
    rounded="lg"
    p={{ base: `4`, md: `8` }}
    {...props}
  />
)
