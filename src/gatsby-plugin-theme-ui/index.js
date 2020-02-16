const h1 = {
  fontWeight: "600",
  fontSize: "3rem",
  color: "primary",
}

const colorPrims = {
  snow: "#f2f4fc",
  gray: "#84868f",
  ash: "#12141c",
  blue: "#3442f4",
  pink: "#f380ea",
}

const colors = {
  gray: colorPrims.gray,
  background: colorPrims.snow,
  text: colorPrims.ash,
  primary: colorPrims.blue,
  secondary: colorPrims.pink,
  accent: colorPrims.ash,
}

export default {
  colors,
  styles: {
    root: {
      h1,
    },
  },
  links: {
    test: {
      color: "salmon",
      fontSize: "1.5rem",
    },
  },
  MyComp: {
    color: "secondary",
  },
}
