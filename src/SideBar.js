import { BsFillArchiveFill, BsFillBellFill, BsFillLightningChargeFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="32" />} />
      <SideBarIcon icon={<BsFillArchiveFill size="28" />} />
      <SideBarIcon icon={<BsFillBellFill size="28" />} />
      <SideBarIcon icon={<BsFillLightningChargeFill size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
