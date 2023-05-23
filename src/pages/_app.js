import GlobalStyles from "@/components/GlobalStyles";
import Layout from "@/components/Layout";
// import if using className
// import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
