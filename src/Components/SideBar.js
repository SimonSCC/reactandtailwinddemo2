import { BsFillArchiveFill, BsFillBellFill, BsFillHouseFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-48 m-0 flex flex-col bg-color1 text-foreground shadow-lg">
      <SideBarIcon icon={<BsFillHouseFill size="52" />} path="home" tooltip="Home" />
      <SideBarIcon icon={<FaFire size="52" />} path="myingredients" tooltip="My ingredients" />
      <SideBarIcon icon={<BsFillArchiveFill size="52" />} />
      <SideBarIcon icon={<BsFillBellFill size="52" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, tooltip = "tooltip", path = "null" }) => (
  <Link to={path}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  </Link>
);
export default SideBar;
