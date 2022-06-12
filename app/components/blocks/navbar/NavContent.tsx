import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, FlexProps, HStack } from "@chakra-ui/layout";
import * as React from "react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";

export const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box
          as="a"
          rel="home"
          mx="auto"
          href="/"
          title="Headless Wordpress &amp; CMS development service"
        >
          <Logo h="8" />
        </Box>
        <Box visibility={{ base: "visible", sm: "visible" }}>
          <Button
            _hover={{ bg: "black" }}
            as="a"
            href="/contact"
            bg="red"
            color="white"
            variant="with-corner"
          >
            Contact
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button
          colorScheme="red"
          w="full"
          size="lg"
          mt="5"
          variant="with-corner"
        >
          Contact
        </Button>
      </NavMenu>
    </>
  );
};

export const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Box
        as="a"
        href="/"
        rel="home"
        title="Headless Wordpress &amp; CMS development service"
      >
        <Logo h="12" />
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link?.children ? (
              <>
                <Submenu.Desktop link={link} />
              </>
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px" justifyContent="flex-end">
        {/* <Box as="a" href="#" color={mode('blue.600', 'blue.300')} fontWeight="bold">
          Contact
        </Box> */}
        <Button
          as="a"
          href="#contact"
          bg="red"
          color="white"
          fontWeight="bold"
          size="lg"
          variant="with-corner"
          _hover={{ bg: "black" }}
        >
          Contact
        </Button>
      </HStack>
    </Flex>
  );
};

const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
export default NavContent;
