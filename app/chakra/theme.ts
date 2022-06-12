import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import { fontWeights, fontSizes, lineHeights, textStyles, fonts } from "./foundations/typography"
import sizes from "./foundations/sizes"

// Components overrides & custom


// Custom breakpoints
const breakpoints = createBreakpoints({
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`,
  "2xl": `1536px`,
})

const theme = extendTheme({
  styles,
  colors,
  sizes,
  space: sizes,
  fontWeights,
  fonts,
  fontSizes,
  lineHeights,
  textStyles,
  components: {
    Button: {
     baseStyle: {},
      // 3. We can add a new visual variant
      variants: {
        'with-corner': {
          borderRadius: "0",
          borderTopRightRadius: "1.3rem",
          borderBottomLeftRadius: "1.3rem",
          
        },
       
      },
    },
  },
  breakpoints,
  config: {
    initialColorMode: `light`,
    useSystemColorMode: true,
  },
})

export default theme
