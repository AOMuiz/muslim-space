import Footer from "@/components/Footer";
import GlobalStyles from "@/components/GlobalStyles";
import Navbar from "@/components/Navbar";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Navbar />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default App;
