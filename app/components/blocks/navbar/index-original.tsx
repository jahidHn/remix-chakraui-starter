import { Box, useColorModeValue as mode } from '@chakra-ui/react'
// import { useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'

import  NavContent  from './NavContent'


export const Header = () => {
  const [navActive, setNavActive] = React.useState<boolean>(false);

//  const [isLargerThan1024] = useMediaQuery('(min-width: 1024)', true)
  

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >  400) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, []);


  return (
      <Box as="header" bg={mode('white', 'gray.800')} zIndex="10" className={ navActive ? 'sticky' : ''} w="100%">
        <Box as="nav" aria-label="Main navigation" maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          {/* {isLargerThan1024 ? <NavContent.Desktop /> : <NavContent.Mobile /> } */}
          <NavContent.Desktop display={{base: "none", md: "flex"}} />
          <NavContent.Mobile display={{base: "flex", md: "none"}} />
        </Box>
      </Box>
  )
}


