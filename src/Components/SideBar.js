import { BsFillArchiveFill, BsFillBellFill, BsFillHouseFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-48 m-0 flex flex-col  text-foreground shadow-lg bg-gradient-to-b from-color8/10 via-color1 to-color8/5 rounded-lg">
      <SideBarIcon icon={<BsFillHouseFill size="52" />} path="home" tooltip="Home" />
      <SideBarIcon icon={<FaFire size="52" />} path="myingredients" tooltip="My ingredients" />
    </div>
  );
};

function SideBarIcon(props) {
  const location = useLocation();
  // console.log(location);
  return (
    <Link to={props.path}>
      <div className={`sidebar-icon group ${location.pathname === "/" + props.path ? "sidebar-hover-style bg-primary" : ""}`}>
        {props.icon}
        <span className="sidebar-tooltip group-hover:scale-100">{props.tooltip}</span>
      </div>
    </Link>
  );
}

export default SideBar;
