import GlobalStyles from "@/components/GlobalStyles";
import RootLayout from "@/components/Layout";
// import if using className
// import "../styles/globals.css";

import { Roboto, Playfair_Display } from "next/font/google";
import "twin.macro";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto', weight:['100', '300', '400', '500', '700', '900'] });
const playfair_display = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair-display' });

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <RootLayout className={`${roboto.variable} ${playfair_display.variable}`}>
      <Component {...pageProps} />
    </RootLayout>
  </>
);

export default App;
