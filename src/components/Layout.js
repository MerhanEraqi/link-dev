import * as React from "react";
import "../assets/scss/style.scss";
import Footer from "./Footer";
import Header from "./Header";


const Layout = (props) => (
  <main>
    <Header />
    {props.children}
    <Footer />
  </main>
);
export default Layout;