import React from "react";
import { Outlet } from "react-router-dom";
import NavSidebar from "./Sidebar";
import "../Styling/cards.css";

function Layout() {
  return (
    <>
      <div className="layout-class">
        <NavSidebar />
        {/* <SearchSortBar /> */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
