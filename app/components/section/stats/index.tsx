import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from "./Stat"

const stats = [
  { label: 'Performance Score on Mobile', value: '94+ / 100' },
  { label: 'Performance Score on Desktop/Tab', value: '100 / 100' },
  { label: 'Accessiblity & SEO Score', value: '100 / 100' },
]

export const Stats = () => (
  <Box as="section" bg="red" color="white" py="6">
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
        {stats.map(({ label, value }) => (
          <Stat key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)