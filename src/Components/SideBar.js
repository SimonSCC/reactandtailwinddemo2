import { BsFillArchiveFill, BsFillBellFill, BsFillHouseFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-48 m-0 flex flex-col  text-foreground shadow-lg bg-gradient-to-b from-color8/10 via-color1 to-color8/5 rounded-lg">
      <SideBarIcon icon={<FaGlassMartiniAlt size="44" />} path="whatcanimake" tooltip="What can I make" />
      <SideBarIcon icon={<GiSchoolBag size="52" />} path="myingredients" tooltip="My ingredients" />
      <SideBarIcon icon={<FaBook size="44" />} path="allrecipies" tooltip="All recipies" />
    </div>
  );
};

function SideBarIcon(props) {
  const location = useLocation();
  // console.log(location);

  let iconToDisplay = props.icon;

  if (location.pathname === "/" + props.path && props.path === "myingredients") {
    iconToDisplay = openedBag();
  }

  return (
    <Link to={props.path}>
      <div className={`sidebar-icon group ${location.pathname === "/" + props.path ? "sidebar-hover-style bg-primary" : ""}`}>
        {iconToDisplay}
        <span className="sidebar-tooltip group-hover:scale-100">{props.tooltip}</span>
      </div>
    </Link>
  );
}

function openedBag() {
  return (
    <svg width="57" height="57" viewBox="0 0 195 174" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.6914 8.63882C51.4922 8.66601 47.7598 8.75437 44.7129 9.30152C42.8467 9.63457 41.3232 10.1511 40.5996 10.6133C40.1426 10.8852 39.9902 11.0279 39.9141 11.1809L48.9023 31.2962C48.9023 31.2826 48.9404 31.2656 48.9404 31.252C50.8828 28.7644 53.3584 26.6947 56.7861 26.6947H64.7842L54.6914 8.63882ZM140.309 8.63882L130.216 26.6947H138.214C141.68 26.6947 144.117 28.8086 146.06 31.3336L155.086 11.1809C155.01 11.0279 154.857 10.8852 154.4 10.6133C153.677 10.1511 152.153 9.63457 150.287 9.30152C147.24 8.75437 143.508 8.67281 140.309 8.63882ZM97.5 13.0738C85.6172 13.0738 73.6963 18.6336 73.6963 29.7533H80.5518C80.5518 15.677 114.448 15.677 114.448 29.7533H121.304C121.304 18.6336 109.383 13.0738 97.5 13.0738ZM56.7861 32.8119C56.7861 32.8119 55.9102 33.0192 54.5772 34.766C53.2061 36.4652 51.6445 39.3539 50.1592 43.0922C47.1885 50.5688 44.332 61.4777 41.8945 74.2559C37.0995 99.6422 33.946 132.607 33.9041 162.513C34.4145 162.819 35.6027 163.329 37.248 163.771C40.5615 164.688 45.665 165.538 51.835 166.218C64.1748 167.543 80.8565 168.223 97.5 168.223C114.144 168.223 130.825 167.543 143.165 166.218C149.335 165.538 154.438 164.688 157.752 163.771C159.39 163.329 160.57 162.819 161.104 162.513C161.065 133.593 157.904 100.662 153.105 75.0035C150.668 62.0895 147.812 51.0105 144.841 43.3641C143.317 39.5578 141.794 36.6012 140.423 34.8C139.052 33.0226 138.138 32.8119 138.214 32.8119H56.7861ZM97.5 40.4414C106.298 40.4414 115.096 41.8348 122.332 44.7914C129.606 47.748 135.548 52.4719 137.376 59.0648L137.414 59.0988L149.335 105.42H45.665L57.5859 59.0988L57.624 59.0648C59.4522 52.4719 65.3936 47.748 72.668 44.7914C79.9043 41.8348 88.7022 40.4414 97.5 40.4414ZM46.541 114.459H53.3965C53.3965 126.32 55.1484 135.02 58.1191 140.355C61.1279 145.657 64.708 147.73 70.3447 147.73H124.655C130.292 147.73 133.872 145.657 136.881 140.355C139.852 135.02 141.604 126.32 141.604 114.459H148.459C148.459 126.83 146.783 136.311 142.975 143.074C139.166 149.871 132.577 153.847 124.655 153.847H70.3447C62.4229 153.847 55.834 149.871 52.0254 143.074C48.2168 136.311 46.541 126.83 46.541 114.459Z" />
      <path d="M55 42.5L135.5 35L139 3L59.5 10.5L55 42.5Z" />
      <rect x="64" y="87" width="19" height="19" />
      <rect x="89" y="78" width="19" height="28" />
      <rect x="78" y="78" width="19" height="28" />
      <rect x="106" y="91" width="19" height="28" />
      <rect x="123" y="101" width="16" height="28" />
      <rect x="70" y="74" width="7" height="14" />
      <rect x="95" y="65" width="7" height="14" />
      <rect x="84" y="65" width="7" height="14" />
      <rect x="112" y="78" width="7" height="14" />
      <rect x="128" y="88" width="6" height="14" />
      <ellipse cx="55.5" cy="99" rx="8.5" ry="7" />
      <path d="M75.4764 103C75.4764 106.866 71.6709 110 66.9764 110C62.282 110 58.4764 106.866 58.4764 103C58.4764 99.134 62.282 96 66.9764 96C71.6709 96 75.4764 99.134 75.4764 103Z" />
      <path d="M70.5 90.3245C70.5 94.1905 66.6944 97.3245 62 97.3245C57.3056 97.3245 53.5 94.1905 53.5 90.3245C53.5 86.4585 57.3056 83.3245 62 83.3245C66.6944 83.3245 70.5 86.4585 70.5 90.3245Z" />
    </svg>
  );
}
export default SideBar;
