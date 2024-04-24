import React from "react";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
