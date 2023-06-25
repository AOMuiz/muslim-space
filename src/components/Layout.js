import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
