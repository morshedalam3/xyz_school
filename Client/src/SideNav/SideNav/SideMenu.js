import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";

import MenuItem from "./MenuItem";


export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Teachers",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Head Master", to: "/content/courses" },
      { name: "General Teachers", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Class Activities",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Daily Activities", to: "/content-2/courses" },
      { name: "Yearly Activities", to: "/content-2/videos" },
    ],
  },
  { name: "AdminShow", to: `/ShowAdmin`, iconClassName: "bi bi-vector-pen" },
  { name: "MakeAdmin", to: `/makeAdmin`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);


  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : "active"}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Morshed Hasan</h5>
          <p>morshedhasan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
