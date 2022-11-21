import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./navbar";

const Layout = (props) => {
  const { children, footerstatus } = props;
  return (
    <>
      <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        {children}

        {!footerstatus && <Footer />}
      </div>
    </>
  );
};
export default Layout;
