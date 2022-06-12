import { ThemeOverride } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
      bg: mode(`brand.bg`, `brand.dark.bg`)(props),
      color: mode(`brand.text`, `brand.dark.text`)(props),
      scrollbarWidth: `thin`,
      scrollbarColor: mode(`black red`, `red black`)(props),
      "::-webkit-scrollbar": {
        width: `14px`,
      },
      "::-webkit-scrollbar-track": {
        backgroundColor:  mode(`black red`, `red black`)(props),
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor:  mode(`black red`, `red black`)(props),
        borderRadius: `8px`,
        borderWidth: `3px`,
        borderStyle: `solid`,
        borderColor:  mode(`black red`, `red black`)(props),
      },
    },
    "[data-skip-to-content]": {
      clip: `rect(0 0 0 0)`,
      "&:focus": {
        clip: `auto`,
      },
    },
    "input, select, textarea": {
      border: `2px solid #525252 !important`,
      "&:focus": {
        boxShadow: "none !important",
        border: `2px solid #cf0015 !important`,
      }
    },
  }),
}

export default styles
