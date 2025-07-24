import React from "react";
import MenuItem from "../menuItem/MenuItems";
import { adminMenu } from "../../constants/menuConstants";

const SideBarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul className="menu">
        {adminMenu.map((item, index) => {
          return <MenuItem item={item} index={index} key={"menu" + index} />;
        })}
      </ul>
    </div>
  );
};
export default SideBarMenu;
