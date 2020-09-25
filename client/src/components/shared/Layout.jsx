import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
