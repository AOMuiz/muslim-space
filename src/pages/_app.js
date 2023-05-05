import GlobalStyles from "@/components/GlobalStyles";
import Layout from "@/components/Layout";
// import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default App;
