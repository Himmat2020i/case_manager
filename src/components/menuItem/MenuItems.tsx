import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = (prop) => {
  const item = prop.item;
  const index = prop.index;
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <li
      className={
        "sidebar-item" +
        (item.submenu ? " has-sub" : "") +
        (location.pathname === item.url ||
        (item.submenu && item.submenu.filter((si) => si.url === location.pathname).length > 0)
          ? " active"
          : "")
      }>
      <Link
        to={item.url}
        className="sidebar-link"
        onClick={() => {
          setOpen(!open);
        }}>
        <i className={item.icon}></i>
        <span>{item.title}</span>
      </Link>
      {item.submenu && (
        <ul className={"submenu" + (open ? " active" : "")}>
          {item.submenu.map((subitem, subIndex) => {
            return (
              <li
                className={"submenu-item" + (location.pathname === subitem.url ? " active" : "")}
                key={"submenu" + index + subIndex}>
                <Link to={subitem.url} className="submenu-link">
                  {subitem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
