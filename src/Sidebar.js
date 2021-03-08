import React, { useContext } from "react";
import { IoLogoReact } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { globalContext } from "./context";

const Sidebar = () => {
  const getContext = useContext(globalContext);
  // console.log(getContext);
  const { isSidebarOpen, closeSidebar } = getContext;
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <IoLogoReact className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((icons) => {
          const { id, url, icon } = icons;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
