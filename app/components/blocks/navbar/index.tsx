import { Box } from "@chakra-ui/layout";
import * as React from "react";
import {DesktopNavContent, MobileNavContext} from "./NavContent"
interface NavProps {
  MobileNavContext: any
  DesktopNavContent: any
}

export const Header = () => {
  const [navActive, setNavActive] = React.useState<boolean>(false);

  const [mobile, setMobile] = React.useState<boolean>(Boolean);
  React.useEffect(() => {
    let mql = window.matchMedia("(max-width: 1024px)");
    let windowWidth: number | void = Number(window.innerWidth);
    windowWidth = mql.matches ? setMobile(true) : setMobile(false);
    window.addEventListener(
      "resize",
      () => (windowWidth = mql.matches ? setMobile(true) : setMobile(false)),
      { passive: true }
    );
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 400) {
          setNavActive(true);
        } else {
          setNavActive(false);
        }
      },
      { passive: true }
    );
  }, []);

  return (
    <Box
      as="header"
      bg="white"
      zIndex="10"
      className={navActive ? "sticky" : ""}
      w="100%"
    >
      <Box
        as="nav"
        aria-label="Main navigation"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        {mobile ? <MobileNavContext /> : <DesktopNavContent />}
      </Box>
    </Box>
  );
};
