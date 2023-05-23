export const COLORS = {
    white: "0deg 0% 100%",
    gray: {
      100: "185deg 5% 95%",
      300: "190deg 5% 80%",
      500: "196deg 4% 60%",
      700: "220deg 5% 40%",
      900: "220deg 3% 20%",
    },
    primary: {
      100: "#DFC39A",
      200: "#D1AA6E",
      300: "36, 52%, 55%",
      700: "36, 100%, 25%",
      900: "36, 53%, 10%",
    },
    secondary: "240deg 60% 63%",
  };
  
  export const WEIGHTS = {
    normal: 400,
    medium: 500,
    semiBold: 700,
    bold: 900,
  };
  
  export const BREAKPOINTS = {
    phone: 600,
    tablet: 950,
    laptop: 1300,
  };
  
  export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  };