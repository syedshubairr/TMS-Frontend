import { Avatar, Button } from "@mui/material";
import "./style.css";
import { handleLogout, menu } from "./utils";
import { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleMenuChange = (menuItem: string) => {
    setActiveMenu(menuItem);
  };
  return (
    <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            className="border-2 border-[#c24dd0]"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          />
        </div>
        {menu
          .filter((item) => item.role.includes("ROLE_ADMIN"))
          .map((item) => (
            <p
              key={item.value}
              onClick={() => handleMenuChange(item.name)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                activeMenu === item.name ? "activeMenuItem" : "menuItem"
              }`}
            >
              {item.name}
            </p>
          ))}
        <Button fullWidth className="logoutButton" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;