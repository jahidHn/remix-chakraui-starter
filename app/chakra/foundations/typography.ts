import { ThemeOverride } from "@chakra-ui/react"

const fontWeights: ThemeOverride["fontWeights"] = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 900,
}


const fonts: ThemeOverride["fonts"] = {
  heading: `'Source Sans Pro', sans-serif`,
  body: `'Source Sans Pro', sans-serif`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
}

// 1.250 Major Third Type Scale
const fontSizes: ThemeOverride["fontSizes"] = {
  xs: `0.7rem`,
  sm: `0.875rem`, // 14px
  md: `1rem`,
  lg: `1.125rem`,
  xl: `1.563rem`, // h4
  "2xl": `1.953rem`, // h3
  "3xl": `2.441rem`, // h2
  "4xl": `3.052rem`, // h1
  "5xl": `3.815rem`,
  "6xl": `4.668rem`,
  "7xl": `5.96rem`,
  "8xl": `7.451rem`,
}

const lineHeights: ThemeOverride["lineHeights"] = {
  normal: `normal`,
  none: 1,
  xs: `1rem`,
  sm: `1.25rem`,
  md: `1.5rem`,
  lg: `1.75rem`,
  xl: `1.75rem`,
  "2xl": `2.25rem`,
  "3xl": `2.5rem`,
  "4xl": 1,
  "5xl": 1,
  "6xl": 1,
  "7xl": 1,
  "8xl": 1,
}

const textStyles = {
  body: {
    fontSize: [`lg`, null, null, `1.125rem`, `1.3125rem`],
    strong: {
      fontWeight: `medium`,
    },
    a: {
      fontFamily: `'Sen', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      fontWeight: `medium`,
      _hover: {
        textDecoration: `underline`,
      },
    },
    button: {
      fontFamily: `'Source Sans Pro', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      fontWeight: `bold`,
    },
  },
  // ...headingBaseStyles,
}

export { fontWeights, fonts, fontSizes, lineHeights, textStyles }
