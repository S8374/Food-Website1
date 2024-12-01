import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import { Footer } from "../Pages/Home/Footer/Footer";
export const Root = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
