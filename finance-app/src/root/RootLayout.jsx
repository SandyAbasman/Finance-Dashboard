import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar.jsx";
import { useState } from "react";
import MobileSideBar from "../Component/MobileSideBar.jsx";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="main-page md:p-2 sm:py-2 sm:px-1">
      <div className="sidebar-segment md:block hidden ">
        {isOpen ? (
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <MobileSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>

      <div className="main-content-segment  ">
        <Outlet />
      </div>
    </div>
  );
}
