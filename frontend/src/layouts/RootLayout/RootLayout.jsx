import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./RootLayout.scss";

const RootLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="siteFlex">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
